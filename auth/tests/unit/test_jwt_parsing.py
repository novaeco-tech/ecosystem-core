import pytest
import jwt
from unittest.mock import MagicMock, patch
import os
import sys

# Ensure we can import from src
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))

from src.auth_service import AuthServiceImplementation

@pytest.fixture
def auth_service():
    return AuthServiceImplementation()

def test_validate_token_missing_token(auth_service):
    """
    Verifies that an empty or None token returns is_valid=False immediately.
    """
    request = MagicMock()
    request.token = ""
    
    response = auth_service.ValidateToken(request, None)
    
    assert response.is_valid is False
    assert response.user_id == ""
    assert response.role == ""

@patch('src.auth_service.jwks_client')
def test_validate_token_malformed_header(mock_jwks, auth_service):
    """
    Verifies that a token with a bad header (e.g. missing 'kid') is rejected
    gracefully without crashing the service.
    """
    request = MagicMock()
    request.token = "malformed.jwt.token"
    
    # Simulate the JWKS client failing to parse the header
    mock_jwks.get_signing_key_from_jwt.side_effect = jwt.PyJWTError("Invalid header padding")
    
    response = auth_service.ValidateToken(request, None)
    
    assert response.is_valid is False
    # Ensure we log the error (implicitly verified by not raising exception)

@patch('src.auth_service.jwks_client')
@patch('jwt.decode')
def test_validate_token_expired(mock_decode, mock_jwks, auth_service):
    """
    Verifies that an expired token (even if signed correctly) is rejected.
    """
    request = MagicMock()
    request.token = "expired.jwt.token"
    
    # Mock successful key retrieval
    mock_key = MagicMock()
    mock_key.key = "public-key"
    mock_jwks.get_signing_key_from_jwt.return_value = mock_key
    
    # Mock decode raising ExpiredSignatureError
    mock_decode.side_effect = jwt.ExpiredSignatureError("Signature has expired")
    
    response = auth_service.ValidateToken(request, None)
    
    assert response.is_valid is False

@patch('src.auth_service.jwks_client')
@patch('jwt.decode')
def test_validate_token_role_extraction(mock_decode, mock_jwks, auth_service):
    """
    Verifies that roles are correctly extracted from the nested 'realm_access' claim.
    """
    request = MagicMock()
    request.token = "valid.admin.token"
    
    mock_jwks.get_signing_key_from_jwt.return_value = MagicMock(key="pk")
    
    # Return a payload with complex role structure
    mock_decode.return_value = {
        "sub": "user-123",
        "realm_access": {
            "roles": ["admin", "editor"]
        }
    }
    
    response = auth_service.ValidateToken(request, None)
    
    assert response.is_valid is True
    assert response.user_id == "user-123"
    # Should pick the first role
    assert response.role == "admin"

@patch('src.auth_service.jwks_client')
@patch('jwt.decode')
def test_validate_token_no_roles(mock_decode, mock_jwks, auth_service):
    """
    Verifies fallback to 'user' role if the claim is missing.
    """
    request = MagicMock()
    request.token = "valid.user.token"
    
    mock_jwks.get_signing_key_from_jwt.return_value = MagicMock(key="pk")
    
    # Payload missing 'realm_access' entirely
    mock_decode.return_value = {
        "sub": "user-456"
    }
    
    response = auth_service.ValidateToken(request, None)
    
    assert response.is_valid is True
    assert response.role == "user" # Default fallback