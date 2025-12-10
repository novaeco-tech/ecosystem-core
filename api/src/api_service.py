import os

import requests
from flask import Flask, jsonify, request

app = Flask(__name__)

# Configuration for internal services (Docker DNS)
SERVICES = {
    "auth": os.environ.get("AUTH_URL", "http://novaeco-auth:9000"),
    "agro": os.environ.get("AGRO_URL", "http://novaagro-api:8000"),
}


@app.route("/", methods=["GET"])
def root():
    return jsonify({"message": "Welcome to the NovaEco API Gateway", "service": "novaeco-api-gateway"})


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok", "service": "novaeco-api-gateway"})


@app.route("/<service>/<path:subpath>", methods=["GET", "POST", "PUT", "DELETE"])
def proxy(service, subpath):
    """Minimal Proxy: Forwards requests to internal microservices."""
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
        return jsonify({"error": "Upstream service unavailable", "details": str(e)}), 502


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
