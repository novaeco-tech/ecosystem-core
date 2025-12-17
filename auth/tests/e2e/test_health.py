import os
import pytest
import requests

# L3 E2E tests run against the deployed container.
# We default to the local devcontainer port (9000), but CI can inject a different URL.
BASE_URL = os.environ.get("APP_URL", "http://localhost:9000")

@pytest.mark.requirement("REQ-CORE-OPS-001")
def test_health_check_live():
    """
    Sanity Check:
    Verifies the running Auth container accepts HTTP traffic and returns JSON.
    Trace: REQ-CORE-OPS-001 (Container Health)
    """
    url = f"{BASE_URL}/health"
    print(f"Connecting to {url}...")

    try:
        response = requests.get(url, timeout=2)
    except requests.exceptions.ConnectionError:
        pytest.fail(f"❌ Could not connect to {url}. Is the Auth container running?")

    # 1. Check HTTP Status
    assert response.status_code == 200, f"Expected 200 OK, got {response.status_code}"

    # 2. Check Payload Structure
    json_data = response.json()
    assert json_data["status"] == "ok"
    assert json_data["service"] == "novaeco-auth"
    
    # 3. Verify Operational Mode (Specific to Auth)
    assert json_data["mode"] == "verifier"