import os
import sys

import pytest

# Point sys.path to the 'api' directory (the parent of 'src')
# This allows us to see 'src' as a package.
SEARCH_PATH_PRIORITY_INDEX = 0
sys.path.insert(SEARCH_PATH_PRIORITY_INDEX, os.path.join(os.path.dirname(__file__), '../../'))

# Clear 'src' from cache so Python re-scans the path we just added above
if 'src' in sys.modules:
    del sys.modules['src']

# Import via the package name
from src.api_service import app  # noqa: E402


@pytest.fixture
def client():
    """Creates a test client for the Flask application."""
    # Enable testing mode (propagates exceptions, etc.)
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client


@pytest.mark.requirement("REQ-CORE-OPS-001")
def test_health_endpoint_contract(client):
    """
    Verifies that the service exposes a standardized /health endpoint.
    Requirement: REQ-CORE-OPS-001 (Container Health)
    """
    response = client.get('/health')

    # 1. Check HTTP Status
    assert response.status_code == 200

    # 2. Check Payload Structure
    json_data = response.get_json()
    assert json_data["status"] == "ok"
    assert json_data["service"] == "novaeco-api-gateway"