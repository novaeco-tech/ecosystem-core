# Non-Functional Requirements

These requirements define the **quality attributes** (Performance, Security, UX) of the Core Kernel.

| ID | Title | Category | Constraint |
| :--- | :--- | :--- | :--- |
| **REQ-CORE-SEC-001** | **Token Signature** | Security | The Gateway must reject any JWT that is not signed by the authoritative Keycloak private key (RS256). |
| **REQ-CORE-PERF-001** | **Gateway Overhead** | Performance | The proxy overhead added by the Gateway must be less than **20ms** for HTTP/REST requests. |
| **REQ-CORE-PERF-002** | **Auth Verification Speed** | Performance | The internal `Auth` service must validate tokens via gRPC in less than **5ms** (99th percentile) to support high-frequency trading agents. |
| **REQ-CORE-ARCH-001** | **Protocol Multiplexing** | Architecture | The Gateway must accept both HTTP/1.1 (JSON) and HTTP/2 (gRPC) traffic on the same listening port (443). |
| **REQ-CORE-UI-001** | **Mobile Responsiveness** | Usability | The NovaAdmin dashboard must render without horizontal scrolling on a 375px wide viewport. |
| **REQ-CORE-OPS-001** | **Container Health** | Operations | All core containers must provide a `/health` endpoint that returns JSON `{"status": "ok"}` for orchestration probes. |

---

## Related Pages
- [Functional Requirements](./functional.md)
- [Sustainability Requirements](./sustainability.md)
- [Architecture Overview](../architecture/overview.md)
- [Use Cases: Tier 1 Onboarding & Control](../usecases/tier-1-onboarding-and-control.md)