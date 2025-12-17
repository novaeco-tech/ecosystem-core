import os
import logging
import threading
from concurrent import futures

import grpc
import requests
from flask import Flask, jsonify, request

# --- Configuration & Logging ---
LOG_LEVEL = os.environ.get("LOG_LEVEL", "INFO")
logging.basicConfig(level=LOG_LEVEL, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger("api-gateway")

app = Flask(__name__)

# Configuration for internal services (Docker DNS)
SERVICES = {
    "auth": os.environ.get("AUTH_URL", "http://novaeco-auth:9000"),
    "agro": os.environ.get("AGRO_URL", "http://novaagro-api:8000"),
}

# --- gRPC Imports (Graceful Fallback) ---
# This allows the container to start even if the proto artifacts aren't built yet
try:
    from novaeco_api_client import api_pb2, api_pb2_grpc
except ImportError:
    logger.warning("⚠️  Could not import novaeco_api_client. gRPC service will not function.")
    api_pb2 = None
    api_pb2_grpc = None


# --- 1. gRPC Service Implementation ---

class GatewayServiceImplementation(api_pb2_grpc.GatewayServiceServicer if api_pb2_grpc else object):
    """
    Implementation of the Gateway management interface.
    Follows the contract defined in api/api/proto/v1/api.proto.
    """

    def GetHealth(self, request, context):
        """
        L2 Verification: Checks status of the Kernel Bundle.
        """
        # In a real scenario, you might ping SERVICES['auth'] here
        # For now, we report the Gateway's own status
        deps = {
            "auth": "configured", 
            "agro": "configured"
        }
        
        return api_pb2.HealthResponse(
            status="ok",
            service="novaeco-api-gateway",
            dependencies=deps
        )

    def GetInfo(self, request, context):
        """
        Metadata endpoint for dashboards.
        """
        return api_pb2.InfoResponse(
            message="Welcome to the NovaEco API Gateway",
            service="novaeco-api-gateway",
            version=os.environ.get("VERSION", "0.1.0")
        )


def run_grpc():
    """Starts the gRPC server on a background thread."""
    if not api_pb2_grpc:
        logger.error("🚫 Skipping gRPC server start: Proto definitions missing.")
        return

    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    api_pb2_grpc.add_GatewayServiceServicer_to_server(GatewayServiceImplementation(), server)
    
    # Default to 50051 for the Gateway's management interface
    grpc_port = os.environ.get("GRPC_PORT", "50051")
    server.add_insecure_port(f"[::]:{grpc_port}")
    server.start()
    
    print(f"⛩️  Gateway gRPC server started on port {grpc_port}")
    server.wait_for_termination()


# --- 2. Flask App (REST & Proxy) ---

@app.route("/", methods=["GET"])
def root():
    return jsonify({
        "message": "Welcome to the NovaEco API Gateway", 
        "service": "novaeco-api-gateway"
    })


@app.route("/health", methods=["GET"])
def health():
    """
    REST Wrapper for Health Check.
    Satisfies REQ-CORE-OPS-001.
    """
    # Note: In the future, this could internally call the gRPC handler logic 
    # to ensure identical behavior across protocols.
    return jsonify({
        "status": "ok", 
        "service": "novaeco-api-gateway",
        "dependencies": list(SERVICES.keys())
    })


@app.route("/<service>/<path:subpath>", methods=["GET", "POST", "PUT", "DELETE"])
def proxy(service, subpath):
    """
    Minimal Proxy: Forwards requests to internal microservices.
    This remains HTTP/REST focused as it handles web traffic.
    """
    if service not in SERVICES:
        return jsonify({"error": "Service not found"}), 404

    target_url = f"{SERVICES[service]}/{subpath}"

    try:
        # Forward the request
        resp = requests.request(
            method=request.method,
            url=target_url,
            headers={key: value for (key, value) in request.headers if key != "Host"},
            data=request.get_data(),
            cookies=request.cookies,
            allow_redirects=False,
        )
        return (resp.content, resp.status_code, resp.headers.items())
    except Exception as e:
        logger.error(f"Proxy error to {target_url}: {str(e)}")
        return jsonify({"error": "Upstream service unavailable", "details": str(e)}), 502


# --- 3. Entrypoint ---

if __name__ == "__main__":
    # Start gRPC in a background thread
    grpc_thread = threading.Thread(target=run_grpc)
    grpc_thread.daemon = True
    grpc_thread.start()

    # Start Flask in the main thread
    port = int(os.environ.get("HTTP_PORT", 8000))
    print(f"🌍 Gateway HTTP proxy starting on port {port}...")
    app.run(host="0.0.0.0", port=port, debug=True)