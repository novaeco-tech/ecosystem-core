# Functional Requirements

These requirements define the **behavior** of the NovaEco Core Kernel services (Gateway, Auth, Identity).

| ID | Title | Description | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| **REQ-CORE-FUNC-001** | **Universal Identity (SSO)** | The Identity Provider (Keycloak) must provide standard OpenID Connect (OIDC) authentication for all ecosystem apps. | 1. User logs in at `id.novaeco.tech`.<br/>2. User is redirected to `admin.novaeco.tech` (or other apps) with a valid JWT.<br/>3. Token contains `user_id` (sub) and `roles` (realm_access). |
| **REQ-CORE-FUNC-002** | **Multiplexed Gateway** | The Gateway must route traffic to internal services based on both **Path Prefix** and **Protocol Type**. | 1. `POST /api/agro/*` (JSON) $\to$ `novaagro` REST API.<br/>2. `POST /` (gRPC) with `novaeco.auth.v1` proto $\to$ `auth` service.<br/>3. Invalid paths or protocols return HTTP 404/400. |
| **REQ-CORE-FUNC-003** | **Launchpad Discovery** | The Mission Control (NovaAdmin) must dynamically query the Gateway to list active sectors. | 1. NovaAdmin calls Gateway `/services` endpoint.<br/>2. Dashboard renders a grid of active sectors.<br/>3. Clicking "NovaAgro" navigates to `agriculture.novaeco.tech`. |
| **REQ-CORE-FUNC-004** | **Health Aggregation** | The Gateway's `/health` endpoint must reflect the collective status of the core infrastructure. | 1. If Keycloak or Auth is down, Gateway Status is "Degraded".<br/>2. If all core services respond, Status is "Online". |
| **REQ-CORE-FUNC-005** | **Token Verification Bridge** | The internal Auth service must validate JWTs using cached public keys (JWKS) to minimize latency. | 1. Service fetches JWKS from `id.novaeco.tech` on startup.<br/>2. Validates RS256 signature locally.<br/>3. Returns `is_valid=true` via gRPC in < 5ms. |

---

## Related Pages
- [Non-Functional Requirements](./non-functional.md)
- [Sustainability Requirements](./sustainability.md)
- [Architecture Overview](../architecture/overview.md)
- [Use Cases: Level 1 Onboarding](../usecases/level-1-onboarding.md)