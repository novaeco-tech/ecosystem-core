# ADR-001: Core Services Kernel

Date: 2025-11-26
Status: Accepted

## Context
The NovaEco ecosystem requires a stable "Kernel" to provide shared infrastructure—specifically Identity, API Routing, and Documentation—that serves all other sectors.

We need to support diverse clients: web dashboards (which prefer REST/JSON) and high-performance IoT/Automation agents (which prefer gRPC). Exposing these on different ports is operationally complex in firewalled environments.

## Decision
We use a monorepo (`novaeco`) to manage the **Core Infrastructure Services** and adopt a **Protocol Multiplexing Strategy**:

1.  **Gateway (`api.novaeco.tech`):** The unified ingress point. It listens on **Port 443** (HTTP/2) and routes traffic based on `Content-Type`:
    * `application/json` $\to$ **REST Handlers** (for Web/Mobile).
    * `application/grpc` $\to$ **gRPC Handlers** (for Agents/Workers).
2.  **Identity Stack (Split-Face):**
    * **Identity Provider (`id.novaeco.tech`):** Keycloak instance for public SSO, Sign-up, and OIDC flows.
    * **Auth Verifier (`auth.novaeco.tech`):** High-speed internal service for validating tokens against cached keys, exposed internally via gRPC.
3.  **Docs (`novaeco.tech`):** The central documentation hub and knowledge base.

The repository uses **DevContainers** to orchestrate these services alongside the **Identity Provider** (Keycloak) for a consistent local development environment.

## Consequences
### Positive
- **Unified Surface:** Clients connect to a single domain (`api.novaeco.tech`) regardless of the protocol they speak.
- **Stable Kernel:** Infrastructure changes (Auth, Gateway, Docs) are versioned together.
- **Simplified Onboarding:** Developers get the full identity and routing stack in one `docker-compose up`.

### Negative
- **Infrastructure Complexity:** Requires an advanced Ingress Controller (e.g., Traefik, Envoy, or Nginx with HTTP/2 support) to handle the demultiplexing correctly.
- **Context Switching:** Developers working on a UI (e.g., `novaadmin` or `novaagro`) must run this kernel alongside their specific application repo.