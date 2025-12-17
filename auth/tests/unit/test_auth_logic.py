import os
import sys
import pytest
from unittest.mock import MagicMock, patch
import jwt

# Point sys.path to the 'auth' directory (parent of 'src')
# Path: auth/tests/unit/ -> ../../ -> auth/
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))

# Import the class to be tested
from src.auth_service import AuthServiceImplementation

@pytest.fixture
def auth_service():
    """Fixture to provide a fresh instance of the service for each test."""
    return AuthServiceImplementation()

@pytest.mark.requirement("REQ-CORE-SEC-001")
@patch('src.auth_service.jwks_client')
def test_validate_token_success(mock_jwks, auth_service):
    """
    Verifies that a token signed with a valid key matches REQ-CORE-SEC-001.
    We mock the infrastructure (Keycloak JWKS) to keep this a Level 5 unit test.
    """
    # 1. Setup Mock Infrastructure
    mock_key = MagicMock()
    # We don't need a real key string if we mock jwt.decode, 
    # but providing a dummy one is safer for flow.
    mock_key.key = "fake-public-key" 
    mock_jwks.get_signing_key_from_jwt.return_value = mock_key

    # 2. Setup Request
    request = MagicMock()
    request.token = "valid.jwt.token"

    # 3. Mock the actual JWT decoding to avoid needing real crypto keys in a unit test
    # This isolates the logic: "If JWKS returns a key, do we try to decode?"
    with patch('jwt.decode') as mock_decode:
        # Simulate a successful decode returning user info
        mock_decode.return_value = {
            "sub": "user-123", 
            "realm_access": {"roles": ["admin"]}
        }
        
        # 4. Execute
        response = auth_service.ValidateToken(request, None)

    # 5. Assertions
    assert response.is_valid is True
    assert response.user_id == "user-123"
    assert response.role == "admin"
    
    # Verify we actually asked for the signing key (The Core Security Requirement)
    mock_jwks.get_signing_key_from_jwt.assert_called_with("valid.jwt.token")

@pytest.mark.requirement("REQ-CORE-SEC-001")
@patch('src.auth_service.jwks_client')
def test_validate_token_failure(mock_jwks, auth_service):
    """
    Verifies that invalid signatures result in a rejected token.
    """
    request = MagicMock(token="bad.token")

    # Simulate an error from the JWT library (e.g. signature mismatch)
    mock_jwks.get_signing_key_from_jwt.side_effect = jwt.PyJWTError("Invalid Header")

    response = auth_service.ValidateToken(request, None)

    assert response.is_valid is False
    assert response.user_id == ""