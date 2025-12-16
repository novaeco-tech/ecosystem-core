# Sustainability Requirements

These requirements ensure the platform itself minimizes its ecological footprint through efficient design and protocol choices.

| ID | Title | Description | Metric |
| :--- | :--- | :--- | :--- |
| **REQ-CORE-SUS-001** | **Dark Mode Default** | To reduce energy consumption on OLED screens, the default UI theme for all Core apps (Docs, NovaAdmin) must be Dark. | Default CSS variable `--bg` is `#0f2027` (or similar dark hex). |
| **REQ-CORE-SUS-002** | **Protocol Efficiency** | High-volume machine-to-machine traffic must use **Binary Serialization** (gRPC/ProtoBuf) to reduce CPU cycles and bandwidth usage compared to text-based JSON. | Internal `Auth` validation uses gRPC by default. |
| **REQ-CORE-SUS-003** | **Payload Compression** | Public REST APIs must support compression to minimize data transfer energy for mobile/web clients. | Gateway responses must have `Content-Encoding: gzip` enabled. |
| **REQ-CORE-SUS-004** | **Federated Lazy Loading** | The Mission Control dashboard must only load the JavaScript/Assets for the specific Sector a user is accessing, rather than the entire ecosystem monolith. | Initial bundle size for `novaadmin` < 200KB. |

---

## Related Pages
- [Functional Requirements](./functional.md)
- [Non-Functional Requirements](./non-functional.md)
- [Architecture Overview](../architecture/overview.md)
- [Use Cases: Level 1 Onboarding](../usecases/level-1-onboarding.md)