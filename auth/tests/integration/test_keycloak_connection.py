import os
import pytest
import requests

# This test requires the container environment (Docker network)
# It verifies that your service allows outbound traffic to Keycloak
JWKS_URL = os.environ.get("KEYCLOAK_URL", "http://keycloak:8080") + "/realms/novaeco/protocol/openid-connect/certs"

@pytest.mark.integration
def test_keycloak_jwks_reachable():
    """
    Verifies that the Auth Service can reach the Keycloak JWKS endpoint.
    If this fails, your internal network or DNS is misconfigured.
    """
    print(f"Testing connection to: {JWKS_URL}")
    try:
        response = requests.get(JWKS_URL, timeout=5)
        assert response.status_code == 200
        data = response.json()
        assert "keys" in data
        assert len(data["keys"]) > 0
    except requests.exceptions.ConnectionError:
        pytest.fail(f"❌ Could not connect to Keycloak at {JWKS_URL}. Is the 'keycloak' service running?")