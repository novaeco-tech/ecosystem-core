import sys
import os
import pytest
import yaml
from openapi_spec_validator import validate_spec

# Ensure we can import from src (auth/tests/integration/contracts -> ../../../../ -> auth/)
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../../../../')))

from src.auth_service import app

@pytest.fixture
def client():
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client

@pytest.fixture
def openapi_spec():
    """Loads the OpenAPI spec from the filesystem."""
    spec_path = os.path.join(os.path.dirname(__file__), '../../../api/openapi.yaml')
    with open(spec_path, 'r') as f:
        return yaml.safe_load(f)

def test_openapi_spec_is_valid(openapi_spec):
    """
    L4 Contract Test:
    Ensures the openapi.yaml file itself is syntactically correct standard OpenAPI 3.0.
    """
    try:
        validate_spec(openapi_spec)
    except Exception as e:
        pytest.fail(f"OpenAPI Spec is invalid: {e}")

def test_health_endpoint_matches_contract(client, openapi_spec):
    """
    L4 Contract Test:
    Verifies that the implemented /health endpoint matches the OpenAPI definition.
    Trace: REQ-CORE-OPS-001 (Health Aggregation)
    """
    # 1. Get the expected structure from YAML
    # Path: /health -> get -> responses -> 200 -> content -> app/json -> schema
    expected_response = openapi_spec['paths']['/health']['get']['responses']['200']['content']['application/json']['schema']
    ref_name = expected_response['$ref'].split('/')[-1]
    schema = openapi_spec['components']['schemas'][ref_name]
    
    # 2. Call the actual endpoint
    response = client.get("/health")
    data = response.get_json()

    # 3. Assert Implementation matches Contract
    assert response.status_code == 200
    
    # Check required fields defined in OpenAPI
    for required_field in schema.get('required', []):
        assert required_field in data, f"Missing required field '{required_field}' defined in OpenAPI"

    # Check enums (e.g. status must be 'ok', 'degraded', or 'down')
    if 'status' in schema['properties']:
        allowed = schema['properties']['status']['enum']
        assert data['status'] in allowed, f"Status '{data['status']}' not in allowed enum {allowed}"

    # Check specific Auth fields
    if 'mode' in schema['properties']:
        assert data['mode'] == "verifier"