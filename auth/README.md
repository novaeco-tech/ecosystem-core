# 🔐 NovaEco Identity Service (Auth)

> **The Digital Passport of the NovaEco.**
> A high-performance Verifier that validates identities for the internal mesh.

## 📖 Overview

The **NovaEco Identity Service** acts as the internal trust anchor. While **Keycloak** manages user login and storage externally, this service provides a high-speed gRPC channel for internal microservices (Agro, Trade) to validate tokens without hitting the external Identity Provider for every request.

**Role:** Token Verifier & Health Monitor
**Protocol:** Hybrid (REST + gRPC)

-   **HTTP (Port 9000):** Health checks and status monitoring (`/health`).
-   **gRPC (Port 9090):** High-throughput token validation for internal services.

**Artifacts:** Produces the `novaeco-auth` docker image and the `novaeco-auth-client` Python SDK.

---

## 🏗️ Architecture

We use a **"Verifier"** pattern. The Flask app monitors health, while the gRPC server performs crypto-verification using public keys fetched from Keycloak.

```mermaid
graph TD
    User((User)) -->|Login / OIDC| Keycloak[Keycloak IdP :8080]
    Keycloak -->|Issue JWT| User

    subgraph "Internal Core Kernel"
        Agro[NovaAgro] -->|gRPC / Validate| Auth[Auth Service :9090]
        Trade[NovaTrade] -->|gRPC / Validate| Auth
        Auth -->|Fetch Public Keys (JWKS)| Keycloak
    end
```

## 📜 Contracts & Specifications

This service is strictly defined by its schema files. These are the **Sources of Truth**.

| Interface | File | Description |
| --- | --- | --- |
| **REST API** | `api/openapi.yaml` | Defines health/monitoring endpoints. |
| **gRPC API** | `api/proto/v1/auth.proto` | Defines the `ValidateToken` contract. |

---

## 🚀 Development

### Prerequisites

* Python 3.11+
* **NovaEco CLI** installed via `pipx`
* Local Keycloak instance running (see `docker-compose.yml`)

### Running Locally

This service runs inside the **Core DevContainer**.

```bash
# Start the Hybrid Server (Flask + gRPC)
python -m src.auth_service
```

* **Health Check:** http://localhost:9000/health
* **gRPC Interface:** `localhost:9090`

### Testing

We use a **V-Model** testing strategy:

1. **Unit (L5):** Verify token parsing logic (mocks Keycloak).
```bash
pytest tests/unit
```


2. **Contract (L4):** Verify implementation matches `.proto` and `openapi.yaml`.
```bash
pytest tests/integration/contracts
```


3. **Performance:** Verify validation speed (< 5ms).
```bash
pytest tests/performance
```


4. **E2E (L3):** Full login cycle (Keycloak -> Auth Service).
```bash
pytest tests/e2e
```



---

## 📦 Client SDK Generation

Other services (like NovaAgro) cannot call the gRPC endpoint directly without the generated client code.

```bash
# Generate the Python client
novaeco build client
```

This generates a `.whl` file that other services install to talk to Auth.

---

## ⚙️ Configuration

| Variable | Default | Description |
| --- | --- | --- |
| `HTTP_PORT` | `9000` | Port for REST Health API. |
| `GRPC_PORT` | `9090` | Port for internal token validation. |
| `KEYCLOAK_URL` | `http://keycloak:8080` | URL to fetch public signing keys (JWKS). |
| `LOG_LEVEL` | `INFO` | Logging verbosity. |
