import sys
import os
import pytest
from unittest.mock import MagicMock

# Ensure we can import from src
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../../../../')))

# We wrap imports in a try-block because these depend on 'novaeco build client'
# having been run successfully in the environment.
try:
    from novaeco_api_client import api_pb2
    from src.api_service import GatewayServiceImplementation
except ImportError:
    # If the SDK isn't built, we can't run this test.
    # In CI, we ensure build happens before test.
    pytest.skip("SKIPPING: novaeco_api_client not found. Run 'novaeco build client' in api/ first.", allow_module_level=True)

@pytest.fixture
def servicer():
    """Returns an instance of the Gateway gRPC implementation."""
    return GatewayServiceImplementation()

def test_get_health_contract(servicer):
    """
    L4 Contract Test:
    Verifies that GetHealth() returns a strictly typed api_pb2.HealthResponse.
    Trace: REQ-CORE-FUNC-004 (Health Aggregation)
    """
    # 1. Create a valid Proto Request
    request = api_pb2.HealthRequest()
    context = MagicMock()

    # 2. Call the implementation directly
    response = servicer.GetHealth(request, context)

    # 3. Verify Return Type (Strict Contract Check)
    assert isinstance(response, api_pb2.HealthResponse), \
        f"Expected api_pb2.HealthResponse, got {type(response)}"

    # 4. Verify Fields match Schema
    assert response.status in ["ok", "degraded", "down"]
    assert response.service == "novaeco-api-gateway"
    # Check map field
    assert "auth" in response.dependencies

def test_get_info_contract(servicer):
    """
    L4 Contract Test:
    Verifies that GetInfo() returns a strictly typed api_pb2.InfoResponse.
    """
    request = api_pb2.InfoRequest()
    context = MagicMock()

    response = servicer.GetInfo(request, context)

    # 3. Verify Return Type
    assert isinstance(response, api_pb2.InfoResponse), \
        f"Expected api_pb2.InfoResponse, got {type(response)}"

    # 4. Verify content
    assert len(response.version) > 0
    assert "Gateway" in response.message