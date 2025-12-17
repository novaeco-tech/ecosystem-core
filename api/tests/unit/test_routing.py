import sys
import os
import pytest
from unittest.mock import patch, MagicMock

# Ensure we can import from src (assuming test is run from api/ directory)
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))

from src.api_service import app

@pytest.fixture
def client():
    """Creates a Flask test client."""
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client

def test_health_check(client):
    """
    Verifies REQ-CORE-OPS-001: The health endpoint must return status: ok.
    """
    response = client.get("/health")
    assert response.status_code == 200
    data = response.get_json()
    assert data["status"] == "ok"
    assert data["service"] == "novaeco-api-gateway"
    # Ensure dependencies are listed (even if empty in mocked env)
    assert "dependencies" in data

def test_root_info(client):
    """Verifies the root metadata endpoint."""
    response = client.get("/")
    assert response.status_code == 200
    data = response.get_json()
    assert "Welcome" in data["message"]

@patch("src.api_service.requests.request")
def test_proxy_routing_success(mock_request, client):
    """
    Verifies that the Gateway correctly routes traffic to the target service URL.
    Trace: REQ-CORE-FUNC-002 (Multiplexed Gateway - Path Routing)
    """
    # 1. Setup Mock Response from Upstream
    mock_resp = MagicMock()
    mock_resp.status_code = 201
    mock_resp.content = b'{"id": 1}'
    mock_resp.headers.items.return_value = [("Content-Type", "application/json")]
    mock_request.return_value = mock_resp

    # 2. Execute Request (Simulate User -> Gateway -> Auth)
    # We send a POST to /auth/login
    response = client.post(
        "/auth/login",
        json={"username": "test"},
        headers={"Authorization": "Bearer token"}
    )

    # 3. Verify Gateway Response
    assert response.status_code == 201
    assert response.data == b'{"id": 1}'

    # 4. Verify Routing Logic (Did it call the right URL?)
    # Env var default for auth is http://novaeco-auth:9000
    expected_url = "http://novaeco-auth:9000/login"
    
    args, kwargs = mock_request.call_args
    assert kwargs["method"] == "POST"
    assert kwargs["url"] == expected_url
    assert kwargs["json"] == {"username": "test"}
    # Host header should be stripped/managed
    assert "Host" not in kwargs["headers"]

def test_proxy_service_not_found(client):
    """Verifies 404 logic for unknown services."""
    response = client.get("/unknown-service/path")
    assert response.status_code == 404
    assert "Service not found" in response.get_json()["error"]

@patch("src.api_service.requests.request")
def test_proxy_upstream_failure(mock_request, client):
    """
    Verifies 502 Bad Gateway response when upstream crashes or is unreachable.
    """
    # Simulate a connection error
    mock_request.side_effect = Exception("Connection refused")

    response = client.get("/auth/health")
    
    assert response.status_code == 502
    data = response.get_json()
    assert data["error"] == "Upstream service unavailable"
    assert "Connection refused" in data["details"]