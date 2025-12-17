import os
import pytest
import requests

# L3 E2E tests run against the deployed container.
# We default to the local devcontainer port (8000), but CI can inject a different URL.
BASE_URL = os.environ.get("APP_URL", "http://localhost:8000")

@pytest.mark.requirement("REQ-CORE-OPS-001")
def test_health_check_live():
    """
    Verifies the running container accepts HTTP traffic and returns JSON.
    Trace: REQ-CORE-OPS-001 (Container Health)
    """
    url = f"{BASE_URL}/health"
    print(f"Connecting to {url}...")

    try:
        response = requests.get(url, timeout=2)
    except requests.exceptions.ConnectionError:
        pytest.fail(f"❌ Could not connect to {url}. Is the API container running?")

    # 1. Check HTTP Status
    assert response.status_code == 200, f"Expected 200 OK, got {response.status_code}"

    # 2. Check Payload
    json_data = response.json()
    assert json_data["status"] == "ok"
    assert json_data["service"] == "novaeco-api-gateway"
    
    # 3. Verify Dependencies Field (Added in your new api_service.py)
    assert "dependencies" in json_data

def test_root_info_live():
    """
    Verifies the root metadata endpoint (/) on the running container.
    """
    url = f"{BASE_URL}/"
    try:
        response = requests.get(url, timeout=2)
    except requests.exceptions.ConnectionError:
        pytest.fail(f"Could not connect to {url}")

    assert response.status_code == 200
    data = response.json()
    assert "Welcome" in data["message"]