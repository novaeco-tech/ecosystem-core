import os
import pytest
import jwt
from unittest.mock import patch, MagicMock

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))

from src.auth_service import AuthServiceImplementation

@pytest.fixture
def auth_service():
    return AuthServiceImplementation()

def test_token_validation_speed(benchmark, auth_service):
    """
    Benchmarks the internal gRPC token validation logic.
    Constraint: REQ-CORE-PERF-002 (Auth Verification Speed < 5ms)
    """
    # 1. Setup Mock
    with patch('src.auth_service.jwks_client') as mock_jwks, \
         patch('jwt.decode') as mock_decode:
        
        # Mock Key Retrieval
        mock_key = MagicMock()
        mock_key.key = "public-key"
        mock_jwks.get_signing_key_from_jwt.return_value = mock_key
        
        # Mock Decoding (fast success)
        mock_decode.return_value = {"sub": "user-123", "realm_access": {"roles": ["user"]}}
        
        request = MagicMock()
        request.token = "valid.jwt.token"

        # 2. Run Benchmark
        def workload():
            auth_service.ValidateToken(request, None)
            
        benchmark(workload)

    # 3. Constraint Check (< 5ms)
    assert benchmark.stats.stats.mean < 0.005, "Token validation too slow"