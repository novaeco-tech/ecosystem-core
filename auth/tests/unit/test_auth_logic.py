# TODO check if is still needed after architecture changes

import os
import sys
import pytest
from unittest.mock import MagicMock, patch
import jwt

# Point sys.path to the 'auth' directory
SEARCH_PATH_PRIORITY_INDEX = 0
sys.path.insert(SEARCH_PATH_PRIORITY_INDEX, os.path.join(os.path.dirname(__file__), "../../"))

# Import the class to be tested
from src.auth_service import AuthServiceImplementation

@pytest.mark.requirement("REQ-CORE-SEC-001")
@patch('src.auth_service.jwks_client')
def test_validate_token_success(mock_jwks):
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

    # 2. Setup Servicer and Request
    servicer = AuthServiceImplementation()
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
        response = servicer.ValidateToken(request, None)

    # 5. Assertions
    assert response.is_valid is True
    assert response.user_id == "user-123"
    assert response.role == "admin"
    
    # Verify we actually asked for the signing key (The Core Security Requirement)
    mock_jwks.get_signing_key_from_jwt.assert_called_with("valid.jwt.token")

@pytest.mark.requirement("REQ-CORE-SEC-001")
@patch('src.auth_service.jwks_client')
def test_validate_token_failure(mock_jwks):
    """
    Verifies that invalid signatures result in a rejected token.
    """
    servicer = AuthServiceImplementation()
    request = MagicMock(token="bad.token")

    # Simulate an error from the JWT library (e.g. signature mismatch)
    mock_jwks.get_signing_key_from_jwt.side_effect = jwt.PyJWTError("Invalid Header")

    response = servicer.ValidateToken(request, None)

    assert response.is_valid is False
    assert response.user_id == ""