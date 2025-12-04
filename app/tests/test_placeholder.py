import pytest
import sys
import os

# Ensure we can import from the parent directory (where app.py resides)
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

from app import app

@pytest.fixture
def client():
    """Creates a test client for the Flask application."""
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_dashboard_loads(client):
    """
    Sanity Check:
    Ensures the Mission Control dashboard renders (HTTP 200)
    even if the backend API is offline.
    """
    response = client.get('/')
    
    # 1. Assert successful response
    assert response.status_code == 200
    
    # 2. Assert content is HTML and contains the title
    assert b"NovaEco Mission Control" in response.data
    assert b"Launchpad" in response.data