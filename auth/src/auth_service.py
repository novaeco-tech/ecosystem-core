import os
import logging
import threading
from concurrent import futures

import grpc
import jwt
from jwt import PyJWKClient
from flask import Flask, jsonify

# Try to import generated gRPC code. 
# In a dev container, this usually comes from the installed 'novaeco-auth-client' package
# or local generation.
try:
    from novaeco_auth_client import auth_pb2, auth_pb2_grpc
except ImportError:
    # Fallback for when protos haven't been compiled yet (prevents crash loop)
    logging.warning("⚠️  Could not import novaeco_auth_client. gRPC service will not function.")
    auth_pb2 = None
    auth_pb2_grpc = None

# --- Configuration ---
LOG_LEVEL = os.environ.get("LOG_LEVEL", "INFO")
logging.basicConfig(level=LOG_LEVEL, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger("auth-service")

# Keycloak Configuration
KEYCLOAK_URL = os.environ.get("KEYCLOAK_URL", "http://keycloak:8080")
REALM = "novaeco"
# The public endpoint where Keycloak publishes its signing keys
JWKS_URL = f"{KEYCLOAK_URL}/realms/{REALM}/protocol/openid-connect/certs"

# Initialize JWKS Client (Handles caching and key rotation automatically)
jwks_client = PyJWKClient(JWKS_URL)

app = Flask(__name__)


# --- 1. Flask App (HTTP) ---
@app.route("/health", methods=["GET"])
def health():
    """
    Health check.
    Now reports 'verifier' mode since login is handled by Keycloak/NovaAdmin.
    Trace: REQ-CORE-OPS-001
    """
    return jsonify({
        "status": "ok", 
        "service": "novaeco-auth", 
        "mode": "verifier",
        "upstream": KEYCLOAK_URL
    })


def run_flask():
    port = int(os.environ.get("HTTP_PORT", 9000))
    # Enable debug mode for better dev visibility
    app.run(host="0.0.0.0", port=port, debug=True)


# --- 2. gRPC Service Implementation ---

class AuthServiceImplementation(auth_pb2_grpc.AuthServiceServicer if auth_pb2_grpc else object):
    """
    Implementation of the AuthService gRPC definition.
    Validates JWTs by checking their signature against Keycloak's public keys.
    """

    def ValidateToken(self, request, context):
        token = request.token
        
        if not token:
            return self._invalid_response()

        try:
            # 1. Fetch the Signing Key
            # This looks at the 'kid' header in the JWT and finds the matching public key from Keycloak
            signing_key = jwks_client.get_signing_key_from_jwt(token)

            # 2. Verify Signature and Claims
            # We enforce RS256 and check expiration
            # Audience 'account' is standard for Keycloak access tokens unless mapped otherwise
            data = jwt.decode(
                token,
                signing_key.key,
                algorithms=["RS256"],
                audience="account", 
                options={"verify_exp": True}
            )

            # 3. Extract User Info
            user_id = data.get("sub", "")
            
            # Keycloak puts roles in 'realm_access.roles' or 'resource_access'
            # We grab the first role found or default to 'user'
            roles = data.get("realm_access", {}).get("roles", [])
            primary_role = roles[0] if roles else "user"

            logger.debug(f"✅ Validated token for user: {user_id}")
            
            return auth_pb2.ValidateResponse(
                is_valid=True,
                user_id=user_id,
                role=primary_role
            )

        except jwt.PyJWTError as e:
            logger.warning(f"❌ Token validation failed: {str(e)}")
            return self._invalid_response()
        except Exception as e:
            logger.error(f"❌ Unexpected error during validation: {str(e)}")
            return self._invalid_response()

    def _invalid_response(self):
        """Helper to return a standardized failure response."""
        return auth_pb2.ValidateResponse(
            is_valid=False,
            user_id="",
            role=""
        )


def run_grpc():
    if not auth_pb2_grpc:
        logger.error("🚫 Skipping gRPC server start: Proto definitions missing.")
        return

    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    auth_pb2_grpc.add_AuthServiceServicer_to_server(AuthServiceImplementation(), server)
    
    grpc_port = os.environ.get("GRPC_PORT", "9090")
    server.add_insecure_port(f"[::]:{grpc_port}")
    server.start()
    
    print(f"🔐 Auth gRPC server started on port {grpc_port}")
    server.wait_for_termination()


# --- 3. Entrypoint ---
if __name__ == "__main__":
    # Start gRPC in a background thread
    grpc_thread = threading.Thread(target=run_grpc)
    grpc_thread.daemon = True
    grpc_thread.start()

    # Start Flask in the main thread
    print("🌍 Auth HTTP server starting...")
    run_flask()