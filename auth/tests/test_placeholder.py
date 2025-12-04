import pytest
import sys
import os

# Ensure we can import from src/
sys.path.append(os.path.join(os.path.dirname(__file__), '../src'))

from main import app

@pytest.fixture
def client():
    """Creates a test client for the Flask application."""
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_health_check(client):
    """
    Sanity Check:
    Ensures the Auth service can start and respond to HTTP requests.
    """
    response = client.get('/health')
    
    assert response.status_code == 200
    json_data = response.get_json()
    assert json_data["status"] == "ok"
    assert json_data["service"] == "novaeco-auth"
    assert json_data["protocol"] == "http"

def test_mock_login(client):
    """
    Verifies the mock login endpoint works (Step 1a requirement).
    """
    response = client.post('/login')
    assert response.status_code == 200
    assert "token" in response.get_json()