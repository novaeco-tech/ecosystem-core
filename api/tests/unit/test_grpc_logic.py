import pytest
import sys
import os
from unittest.mock import MagicMock

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))

# We mocked the imports in api_service.py for the container build, 
# so we might need to mock them here if the client package isn't installed in the test env yet.
from src.api_service import GatewayServiceImplementation

def test_grpc_health_logic():
    """
    Verifies the internal logic of the gRPC GetHealth method.
    """
    service = GatewayServiceImplementation()
    
    # We can mock the request/context since the logic doesn't use them heavily yet
    mock_request = MagicMock()
    mock_context = MagicMock()

    response = service.GetHealth(mock_request, mock_context)

    # Verify response structure matches our Proto expectation
    assert response.status == "ok"
    assert response.service == "novaeco-api-gateway"
    assert "auth" in response.dependencies

def test_grpc_info_logic():
    """
    Verifies the GetInfo method metadata.
    """
    service = GatewayServiceImplementation()
    response = service.GetInfo(MagicMock(), MagicMock())

    assert "Welcome" in response.message
    # Verify version fallback logic
    assert response.version is not None