import os
import sys
import pytest
import jwt
from unittest.mock import patch, MagicMock

# Ensure we can import from src (auth/tests/performance -> ../../ -> auth/)
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))

from src.auth_service import AuthServiceImplementation

@pytest.fixture
def auth_service():
    """Fixture to provide a fresh instance of the service."""
    return AuthServiceImplementation()

def test_token_validation_speed(benchmark, auth_service):
    """
    Benchmarks the internal gRPC token validation logic.
    Constraint: REQ-CORE-PERF-002 (Auth Verification Speed < 5ms)
    """
    # 1. Setup Mock
    # We mock at the module level where they are used
    with patch('src.auth_service.jwks_client') as mock_jwks, \
         patch('jwt.decode') as mock_decode:
        
        # Mock Key Retrieval (Fast operation)
        mock_key = MagicMock()
        mock_key.key = "public-key"
        mock_jwks.get_signing_key_from_jwt.return_value = mock_key
        
        # Mock Decoding (Fast success)
        mock_decode.return_value = {"sub": "user-123", "realm_access": {"roles": ["user"]}}
        
        request = MagicMock()
        request.token = "valid.jwt.token"

        # 2. Run Benchmark
        # This executes the function repeatedly to calculate mean execution time
        def workload():
            auth_service.ValidateToken(request, None)
            
        benchmark(workload)

    # 3. Constraint Check (< 5ms)
    # 0.005 seconds = 5ms
    mean_time = benchmark.stats.stats.mean
    assert mean_time < 0.005, f"Token validation too slow: {mean_time:.6f}s"