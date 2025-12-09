#!/bin/bash
set -e

# Configuration
SERVICE="novaeco-auth"
VERSION=$(cat auth/VERSION)
PROTO_SRC="./auth/api/proto/v1"
OUT_DIR="./dist/client"

echo "📦 Building ${SERVICE}-client v${VERSION}..."

# 1. Clean & Init
rm -rf ${OUT_DIR}
mkdir -p ${OUT_DIR}/novaeco_auth_client

# 2. Compile ProtoBuf -> Python
# Generates auth_pb2.py and auth_pb2_grpc.py
# Use -I flag to point directly to v1 so the output is flat
python -m grpc_tools.protoc \
    -I./auth/api/proto/v1 \
    --python_out=${OUT_DIR}/novaeco_auth_client \
    --grpc_python_out=${OUT_DIR}/novaeco_auth_client \
    auth.proto

# 3. Fix Relative Imports (Standard Protocol Buffer issue in Python)
# This changes 'import auth_pb2' to 'from . import auth_pb2' so it works as a package
sed -i 's/import auth_pb2/from . import auth_pb2/' ${OUT_DIR}/novaeco_auth_client/auth_pb2_grpc.py

# 4. Create Package Structure
touch ${OUT_DIR}/novaeco_auth_client/__init__.py

# 5. Create setup.py
# Note: install_requires ranges are set to be compatible with requirements.txt
cat <<EOF > ${OUT_DIR}/setup.py
from setuptools import setup, find_packages

setup(
    name="novaeco-auth-client",
    version="${VERSION}",
    packages=find_packages(),
    install_requires=[
        "grpcio>=1.60.0",
        "protobuf>=4.25.1"
    ],
    description="Internal gRPC client for NovaEco Identity",
)
EOF

# 6. Build Wheel
cd ${OUT_DIR}
python -m build --wheel
echo "✅ Artifact Created: $(ls dist/*.whl)"