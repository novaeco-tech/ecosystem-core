# ADR-003: Hybrid API Access Strategy

## Context
The NovaEco ecosystem consists of multiple distinct verticals (e.g., NovaAgro, NovaMind).
We initially considered routing all traffic through a single API Gateway (`api.novaeco.tech`) to act as a "front door."

However, enforcing this for our own internal applications (e.g., `app.mind.novaeco.tech`) creates significant drawbacks:
1.  **Single Point of Failure:** If the central gateway fails, all unrelated vertical apps go offline.
2.  **Performance Bottleneck:** Extra network hops and JSON serialization overhead for every request.
3.  **Coupling:** The central gateway team becomes a blocker for vertical teams wanting to expose new endpoints.

## Decision
We will adopt a **Hybrid Access Strategy** that distinguishes between First-Party Apps and Third-Party Integrators.

1.  **Direct Access for First-Party Apps:**
    Vertical Web Applications (e.g., `app.mind.novaeco.tech`) will communicate **directly** with their respective Backend APIs (e.g., `api.mind.novaeco.tech`).
    * *Mechanism:* Each backend must handle CORS for its matching frontend.
    * *Auth:* Common authentication via `auth.novaeco.tech` (OIDC).

2.  **Gateway for External Traffic:**
    The Central Gateway (`api.novaeco.tech`) will still exist, but strictly for **External 3rd-Party usage** and **Cross-Domain Aggregation**.
    * It provides a stable, rate-limited, and documented interface for partners.

## Consequences
### Positive
- **Fault Isolation:** A crash in the `NovaAgro` API does not affect `NovaMind`.
- **Latency:** Removed unnecessary "hops" for user-facing applications.
- **Autonomy:** Vertical teams control their own API contracts and deployment cycles.

### Negative
- **Client Complexity:** Frontend clients must be configured with specific service URLs (e.g., `NOVAAGRO_API_URL`) rather than a single gateway URL.
- **Security Config:** CORS and SSL termination must be configured on every microservice ingress, not just the gateway.