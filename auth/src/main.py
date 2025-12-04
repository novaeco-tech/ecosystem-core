import os
import threading
from concurrent import futures
import grpc
from flask import Flask, jsonify, request
import time

# --- 1. Flask App (HTTP) ---
app = Flask(__name__)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "ok", "service": "novaeco-auth", "protocol": "http"})

@app.route('/login', methods=['POST'])
def login():
    # Minimal mock login
    return jsonify({"token": "mock-jwt-token-123", "user": "demo-user"})

def run_flask():
    app.run(host='0.0.0.0', port=9000)

# --- 2. gRPC Service ---
# We need the generated code for this to work fully, but for the minimal implementation
# we define the server structure. ensuring the port is open.
def run_grpc():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    
    # FUTURE STEP: Import generated code and add servicer here:
    # from novaeco_auth_client import auth_pb2_grpc
    # auth_pb2_grpc.add_AuthServiceServicer_to_server(AuthServiceImplementation(), server)
    
    server.add_insecure_port('[::]:9090')
    server.start()
    print("🔐 Auth gRPC server started on port 9090")
    server.wait_for_termination()

# --- 3. Entrypoint ---
if __name__ == '__main__':
    # Start gRPC in a background thread
    grpc_thread = threading.Thread(target=run_grpc)
    grpc_thread.daemon = True
    grpc_thread.start()

    # Start Flask in the main thread
    print("🌍 Auth HTTP server starting on port 9000")
    run_flask()