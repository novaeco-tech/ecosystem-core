import sys
import os
import pytest
from unittest.mock import MagicMock, patch

# Ensure we can import from src (auth/tests/integration/contracts -> ../../../../ -> auth/)
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../../../../')))

# We wrap imports because these depend on 'novaeco build client' being run first
try:
    from novaeco_auth_client import auth_pb2
    from src.auth_service import AuthServiceImplementation
except ImportError:
    pytest.skip("SKIPPING: novaeco_auth_client not found. Run 'novaeco build client' in auth/ first.", allow_module_level=True)

@pytest.fixture
def servicer():
    """Returns an instance of the Auth gRPC implementation."""
    return AuthServiceImplementation()

def test_validate_token_contract_success(servicer):
    """
    L4 Contract Test:
    Verifies that ValidateToken() returns a strictly typed auth_pb2.ValidateResponse
    when the logic succeeds.
    """
    # 1. Setup Valid Input
    request = auth_pb2.ValidateRequest(token="test.token.string")
    context = MagicMock()

    # 2. Mock Internals (We are testing the Interface, not the Crypto here)
    with patch('src.auth_service.jwks_client') as mock_jwks, \
         patch('jwt.decode') as mock_decode:
        
        # Simulate valid token decoding
        mock_jwks.get_signing_key_from_jwt.return_value = MagicMock(key="pk")
        mock_decode.return_value = {
            "sub": "contract-user-123",
            "realm_access": {"roles": ["admin"]}
        }

        # 3. Call Implementation
        response = servicer.ValidateToken(request, context)

    # 4. Verify Return Type (Crucial for gRPC stability)
    assert isinstance(response, auth_pb2.ValidateResponse), \
        f"Expected auth_pb2.ValidateResponse, got {type(response)}"

    # 5. Verify Field Mapping
    assert response.is_valid is True
    assert response.user_id == "contract-user-123"
    assert response.role == "admin"

def test_validate_token_contract_failure(servicer):
    """
    L4 Contract Test:
    Verifies that even on failure, we return a valid Protobuf message, not None/Exception.
    """
    # 1. Setup Invalid Input (Empty token)
    request = auth_pb2.ValidateRequest(token="")
    context = MagicMock()

    # 2. Call Implementation
    response = servicer.ValidateToken(request, context)

    # 3. Verify Structure
    assert isinstance(response, auth_pb2.ValidateResponse)
    assert response.is_valid is False
    # Proto3 strings default to empty string "", check strictly
    assert response.user_id == ""
    assert response.role == ""