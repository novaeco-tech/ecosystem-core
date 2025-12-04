import pytest
import sys
import os

# Ensure we can import from src/
sys.path.append(os.path.join(os.path.dirname(__file__), '../src'))

from main import app

@pytest.fixture
def client():
    """Creates a test client for the Flask application."""
    with app.test_client() as client:
        yield client

def test_health_check(client):
    """
    Sanity Check:
    Ensures the application can start and respond to the basic health probe.
    """
    response = client.get('/health')
    
    assert response.status_code == 200
    json_data = response.get_json()
    assert json_data["status"] == "ok"
    assert json_data["service"] == "novaeco-api-gateway"