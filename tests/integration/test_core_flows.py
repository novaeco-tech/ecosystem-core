import pytest
import requests
import os
import time

# Configuration
# Default to localhost for local dev; CI might set specific container names if needed
GATEWAY_URL = os.environ.get("GATEWAY_URL", "http://localhost:8000")
AUTH_URL = os.environ.get("AUTH_URL", "http://localhost:9000")
APP_URL = os.environ.get("APP_URL", "http://localhost:5000")

@pytest.fixture(scope="session")
def wait_for_services():
    """Ensures all services are up before running tests."""
    timeout = 30
    start_time = time.time()
    
    services = {
        "Gateway": f"{GATEWAY_URL}/health",
        "Auth": f"{AUTH_URL}/health",
        # App might not have a JSON health endpoint, so we check root
        "App": f"{APP_URL}/"
    }

    for name, url in services.items():
        while True:
            try:
                response = requests.get(url)
                if response.status_code == 200:
                    break
            except requests.ConnectionError:
                pass
            
            if time.time() - start_time > timeout:
                pytest.fail(f"Timeout waiting for {name} at {url}")
            
            time.sleep(1)

def test_gateway_health(wait_for_services):
    """Verify Gateway is reachable."""
    response = requests.get(f"{GATEWAY_URL}/health")
    assert response.status_code == 200
    data = response.json()
    assert data["service"] == "api" # Matches api/src/main.py

def test_auth_health(wait_for_services):
    """Verify Auth service is reachable directly."""
    response = requests.get(f"{AUTH_URL}/health")
    assert response.status_code == 200
    data = response.json()
    assert data["service"] == "novaeco-auth" # Matches auth/src/main.py

def test_app_dashboard_loads(wait_for_services):
    """Verify Mission Control loads HTML."""
    response = requests.get(f"{APP_URL}/")
    assert response.status_code == 200
    assert "NovaEco Mission Control" in response.text

def test_gateway_routes_to_root(wait_for_services):
    """Verify Gateway root endpoint."""
    response = requests.get(f"{GATEWAY_URL}/")
    assert response.status_code == 200
    assert "Welcome to the NovaEco API Gateway" in response.json()["message"]

# TODO: Add test for Gateway -> Auth proxy once implemented in Gateway logic
# def test_gateway_proxy_to_auth():
#     r = requests.get(f"{GATEWAY_URL}/auth/health")
#     assert r.status_code == 200