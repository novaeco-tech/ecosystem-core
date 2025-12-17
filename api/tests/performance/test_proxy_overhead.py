import sys
import os
import pytest
import requests
from unittest.mock import patch, MagicMock

# Ensure we can import from src
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))

from src.api_service import app

@pytest.fixture
def client():
    app.config["TESTING"] = True
    with app.test_client() as client:
        yield client

def test_proxy_overhead_benchmark(client, benchmark):
    """
    Benchmarks the Gateway Proxy logic.
    Constraint: REQ-CORE-PERF-001 (Gateway Overhead < 20ms)
    
    We mock the external 'requests.request' call to be near-instant (0.1ms).
    Any time measured by the benchmark is therefore pure Gateway Overhead 
    (Flask routing + Header processing + Serialization).
    """
    
    # 1. Setup a fast mock for the upstream service
    with patch("src.api_service.requests.request") as mock_request:
        mock_resp = MagicMock()
        mock_resp.status_code = 200
        mock_resp.content = b'{"data": "fast"}'
        mock_resp.headers.items.return_value = [("Content-Type", "application/json")]
        mock_request.return_value = mock_resp

        # 2. Define the workload function
        def workload():
            client.get("/auth/user/profile")

        # 3. Run Benchmark
        # This runs the workload repeatedly and calculates mean/stddev
        benchmark(workload)

    # 4. Assert Performance Constraint
    # We want the mean execution time to be well under 20ms.
    # Note: In a CI environment, 'benchmark.stats' might vary, so use a safe threshold.
    assert benchmark.stats.stats.mean < 0.020, "Gateway overhead exceeded 20ms"