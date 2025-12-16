# ADR-006: Federated User Interfaces

Date: 2025-11-26
Status: Accepted

## Context
The NovaEco ecosystem covers diverse domains (Health, Agriculture, Finance, Construction) with vastly different user personas and workflows.

A single "Monolithic" Frontend application attempting to serve all these needs would inevitably become bloated, difficult to maintain, and confusing to navigate. Users in an agricultural context do not need to load the heavy JavaScript libraries required for financial trading charts.

## Decision
We will adopt a **Federated UI Strategy**:

1.  **Domain-Specific Apps:** Each **Vertical Sector** (e.g., `agriculture.novaeco.tech`, `finance.novaeco.tech`) develops and hosts its own lightweight frontend application, tailored specifically to its user persona.
2.  **Mission Control Hub:** We introduce **NovaAdmin** (`admin.novaeco.tech`) as the central "Launchpad" and dashboard. It provides the unified entry point, discovery mechanism, and cross-domain navigation shell.
3.  **Shared Identity:** All applications are stitched together via a single **Keycloak SSO Session** (`id.novaeco.tech`). This allows users to jump between the Mission Control Hub and vertical apps without re-authenticating (OpenID Connect).

## Consequences
### Positive
- **Decoupling:** The `NovaAgro` team can iterate on their UI independently without risking regressions in `NovaHealth` or the central Dashboard.
- **Performance:** Users only download the assets relevant to their current context (e.g., a farmer doesn't load the 3D rendering engine used by `NovaMake`).
- **Scalability:** New sectors can be added to the ecosystem simply by registering them in the NovaAdmin launchpad, without redeploying the core platform.

### Negative
- **Consistency Risk:** Requires strict adherence to a shared **Design System (UI Kit)** to ensure separate apps look like one cohesive family.
- **Navigation Friction:** Moving between apps involves full browser navigation (cross-domain), which is slightly slower than client-side routing in a monolith.