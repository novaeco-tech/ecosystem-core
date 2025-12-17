import os
import sys
import pytest

# Point sys.path to the 'auth' directory (parent of 'src')
SEARCH_PATH_PRIORITY_INDEX = 0
sys.path.insert(SEARCH_PATH_PRIORITY_INDEX, os.path.join(os.path.dirname(__file__), "../../"))

from src.auth_service import app  # noqa: E402

@pytest.fixture
def client():
    """Creates a test client for the Flask application."""
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client

@pytest.mark.requirement("REQ-CORE-OPS-001")
def test_health_check(client):
    """
    Sanity Check:
    Ensures the Auth service can start and respond to HTTP requests.
    Verifies REQ-CORE-OPS-001 (Container Health).
    """
    response = client.get("/health")

    assert response.status_code == 200
    json_data = response.get_json()
    assert json_data["status"] == "ok"
    assert json_data["service"] == "novaeco-auth"
    # Updated expectation: Service is now a verifier, not just http
    assert json_data["mode"] == "verifier"