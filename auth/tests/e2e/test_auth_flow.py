import os
import sys
import pytest
import requests
import grpc

# Point sys.path to the 'auth' directory to import src or generated clients if needed
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../../")))

try:
    from novaeco_auth_client import auth_pb2, auth_pb2_grpc
except ImportError:
    pytest.skip("SKIPPING: novaeco_auth_client not found. Run 'novaeco build client' first.", allow_module_level=True)

# Configuration from Environment
KEYCLOAK_URL = os.environ.get("KEYCLOAK_URL", "http://localhost:8080")
AUTH_GRPC_HOST = os.environ.get("AUTH_GRPC_HOST", "localhost")
AUTH_GRPC_PORT = os.environ.get("AUTH_GRPC_PORT", "9090")

# Test Credentials (must match auth/config/keycloak-realm.json)
TEST_USER = "testuser"
TEST_PASS = "password"
REALM = "novaeco"
CLIENT_ID = "novaeco-core"

def get_real_keycloak_token():
    """
    Helper: authenticates against the running Keycloak container to get a valid JWT.
    """
    token_url = f"{KEYCLOAK_URL}/realms/{REALM}/protocol/openid-connect/token"
    payload = {
        "client_id": CLIENT_ID,
        "username": TEST_USER,
        "password": TEST_PASS,
        "grant_type": "password"
    }
    
    try:
        response = requests.post(token_url, data=payload, timeout=5)
        response.raise_for_status()
        return response.json()["access_token"]
    except Exception as e:
        pytest.fail(f"Could not get token from Keycloak at {token_url}. Error: {e}")

@pytest.mark.e2e
def test_full_authentication_cycle():
    """
    L3 System Test:
    1. Obtains a real JWT from Keycloak.
    2. Sends it to the Auth Service via gRPC.
    3. Verifies that Auth Service can fetch JWKS and validate the token.
    """
    # 1. Get Real Token
    token = get_real_keycloak_token()
    assert token is not None, "Failed to obtain token from Keycloak"

    # 2. Connect to Auth Service (gRPC)
    target = f"{AUTH_GRPC_HOST}:{AUTH_GRPC_PORT}"
    print(f"Connecting to Auth Service at {target}...")
    
    with grpc.insecure_channel(target) as channel:
        stub = auth_pb2_grpc.AuthServiceStub(channel)
        
        # 3. Request Validation
        request = auth_pb2.ValidateRequest(token=token)
        try:
            response = stub.ValidateToken(request, timeout=5)
        except grpc.RpcError as e:
            pytest.fail(f"gRPC call failed: {e.code()} - {e.details()}")

    # 4. Verify Result
    assert response.is_valid is True, "Auth Service rejected a valid Keycloak token"
    assert response.user_id != "", "User ID should be extracted"
    # 'testuser' has the 'user' role in keycloak-realm.json
    assert response.role in ["user", "admin"]