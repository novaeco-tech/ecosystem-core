# Architecture Overview

The **NovaEco** is an open‑source operating system for the circular economy.  
It is designed as a **system‑of‑systems**: interconnected **Horizontal Enablers**, **Vertical Sectors**, **Workers**, and **Products** that together enable sustainable collaboration, compliance, and innovation.

---

## 🌐 Core Services (`novaeco`)

At the heart of the ecosystem is the `novaeco` monorepo, which contains the tightly‑coupled central services:

| Service | Subdomain | Description | Docs Reference |
| :--- | :--- | :--- | :--- |
| **Mission Control** | `app.novaeco.tech` | Unified dashboard and launchpad for all ecosystem applications. | [Use Cases L1](../usecases/level-1-onboarding.md) |
| **Gateway** | `api.novaeco.tech` | Single public API entry point for all external traffic. | [API Gateway](../api/gateway.md) |
| **Identity** | `auth.novaeco.tech` | Centralized SSO, MFA, and Trust Profile issuance service. | [API Auth](../api/auth.md) |
| **Docs** | `novaeco.tech` | Public landing page and technical documentation hub. | [Intro](../intro.md) |

These services provide the foundation for onboarding, governance, API integration, and contributor visibility.

---

## 🧩 Horizontal Enablers

Cross‑cutting foundational services consumed by all sectors.

| Enabler | Subdomain | Description |
| :--- | :--- | :--- |
| **NovaBalance** | `balance.novaeco.tech` | Environmental audit engine for carbon, water, and mass. |
| **NovaEquity** | `equity.novaeco.tech` | Social audit engine tracking fair wages and labor rights. |
| **NovaFin** | `finance.novaeco.tech` | Ledger for payments, staking, and ESG token settlements. |
| **NovaInfra** | `infrastructure.novaeco.tech` | Registry for IoT devices and fleet management command. |
| **NovaLogistics** | `logistics.novaeco.tech` | Optimization engine for reverse logistics and circular transport. |
| **NovaMaterial** | `materials.novaeco.tech` | Engine for Digital Product Passports and material lineage. |
| **NovaMind** | `mind.novaeco.tech` | Shared AI models and inference engine for all sectors. |
| **NovaPolicy** | `policy.novaeco.tech` | Policy-as-Code engine for automated regulatory compliance. |
| **NovaSkills** | `skills.novaeco.tech` | Verification system for human labor certifications and degrees. |
| **NovaTrade** | `trade.novaeco.tech` | Marketplace for matching orders and discovering circular assets. |

---

## 🏭 Vertical Sectors

Industry‑specific applications that consume enabler services.

| Sector | Subdomain | Description |
| :--- | :--- | :--- |
| **NovaAgro** | `agriculture.novaeco.tech` | Management of regenerative agriculture and sustainable food systems. |
| **NovaAir** | `air.novaeco.tech` | Air quality monitoring and carbon capture credit verification. |
| **NovaBuild** | `build.novaeco.tech` | Management of construction lifecycles and material banks. |
| **NovaChem** | `chemicals.novaeco.tech` | Chemical leasing models and hazardous material tracking. |
| **NovaEnergy** | `energy.novaeco.tech` | Renewable grid balancing and vehicle-to-grid energy coordination. |
| **NovaMake** | `make.novaeco.tech` | Distributed manufacturing via 3D printing and CNC networks. |
| **NovaNature** | `nature.novaeco.tech` | Biodiversity monitoring and reforestation project management. |
| **NovaPack** | `packaging.novaeco.tech` | Reusable packaging systems and deposit return schemes. |
| **NovaRecycle** | `recycling.novaeco.tech` | Management of recycling centers and urban mining recovery. |
| **NovaRetail** | `retail.novaeco.tech` | Product-as-a-Service management and consumer take-back schemes. |
| **NovaTronix** | `electronics.novaeco.tech` | E-waste management and electronics repair documentation. |
| **NovaTextile** | `textiles.novaeco.tech` | Circular fashion management and fiber-to-fiber recycling loops. |
| **NovaWater** | `water.novaeco.tech` | Management of industrial water cycles and treatment systems. |

---

## ⚙️ Workers

Decoupled, single‑purpose backend services for high-throughput tasks.

| Worker | Subdomain | Description |
| :--- | :--- | :--- |
| **Quality** | `quality.air.novaeco.tech` | Ingests and normalizes data from air quality sensors. |
| **Bioacoustics** | `bio.nature.novaeco.tech` | Identifies species from audio streams using AI models. |
| **IoTIngest** | `ingest.infrastructure.novaeco.tech` | High-throughput processor for raw telemetry from sensors. |
| **LCACalc** | `lca.balance.novaeco.tech` | Calculates real-time environmental impact from material BOMs. |
| **SlicerCheck** | `slicer.make.novaeco.tech` | Verifies 3D model printability for manufacturing jobs. |
| **TradeSettlement** | `settle.finance.novaeco.tech` | Asynchronously batches and commits transactions to the ledger. |

Workers are independent for scalability and fault isolation.

---

## 📦 Products

Flagship applications combining multiple sectors.

| Product | Subdomain | Description |
| :--- | :--- | :--- |
| **DurasAGV** | `duras-agv.novaeco.tech` | Autonomous agricultural robot for regenerative farming tasks. |
| **NovaLab** | `lab.novaeco.tech` | Innovation engine for designing and launching circular projects. |
| **RetailLoop** | `retail-loop.novaeco.tech` | E-commerce plugin for resale and product take-back. |
| **UrbanMiner** | `urban-miner.novaeco.tech` | Dashboard for city councils to map municipal waste streams. |

---

## 👥 Main Actors

- **Contributors** – register via Identity, propose governance changes, build apps.  
- **Organizations** – manage teams, roles, and compliance dashboards.  
- **Developers** – generate API keys, integrate external systems, build sector apps.  
- **Regulators/Auditors** – use compliance dashboards, validate ESG and policy adherence.  
- **Citizens/End‑Users** – interact with apps (marketplace, dashboards, mobility services).  

---

## 🛠️ Technical Standards

To ensure scalability and decoupling, the ecosystem adheres to strict communication and interface standards:

### Communication Protocols
- **External (Public):** **REST/JSON** via the API Gateway. All 3rd-party apps and frontend clients consume this.
- **Internal (Pillar-to-Pillar):** **gRPC/ProtoBuf**. Used for high-performance, type-safe communication between Enablers and Sectors (e.g., NovaAgro API calling NovaFin API).
- **Asynchronous:** **RabbitMQ/NATS**. Used for Pillar-to-Worker tasks (e.g., triggering an LCA calculation).

### User Interface Strategy
- **Federated UIs:** Instead of a single monolithic frontend, each Pillar (NovaAgro, NovaHealth, NovaFin) hosts its own dedicated "micro-frontend" or standalone web app.
- **Unified Identity:** A seamless SSO (Single Sign-On) session persists across all domain boundaries (`*.novaeco.tech`).

---

## 🔄 Interaction Flow

1. **Onboarding**: Identity service creates Trust Profiles.  
2. **Integration**: Gateway issues API keys for external systems.  
3. **Transactions**: NovaTrade + NovaFin enable secure exchanges.  
4. **Data Aggregation**: NovaBalance + NovaMaterial + Sector workers provide sustainability metrics.  
5. **Governance**: NovaPolicy enforces rules; NovaEquity ensures fairness.  
6. **Visibility**: Dashboard aggregates results; Docs provide transparency.

---

## 📊 Diagram (Mermaid)

```mermaid
graph TD
  User --> Identity
  Identity --> Gateway
  Gateway --> Dashboard
  Docs --> User
  Dashboard --> Docs
  Gateway --> Enablers[NovaHub / NovaFin / NovaTrade / NovaSapien / NovaEnergy / NovaMaterial / NovaMobility / NovaInfra / NovaSkills / NovaPolicy / NovaBalance / NovaEquity]
  Enablers --> Sectors[NovaAgro / NovaWater / NovaBuild / NovaTextile / NovaWaste / NovaAir / NovaHealth / NovaChem / NovaTronix / NovaPack]
  Sectors --> Workers[Background Jobs / Calculators / Sync Services]
  Workers --> Products[Flagship Apps: DurasAGV / Urban Mining / Reusable Packaging / City-Wide Loop / Circular Hospital]
````

---

## 🌱 Principles

  - **Open Source** – all repos are public, community‑driven.
  - **Transparency** – ADRs, Use Cases, Guides, and Glossary ensure clarity.
  - **Scalability** – monorepo model with containerized services.
  - **Auditability** – NovaBalance and NovaEquity enablers provide verifiable impact.
  - **Circularity** – every sector and product reinforces sustainable loops.

---

## 🔗 Related Pages

- [Intro](../intro.md)  
- [Functional Requirements](../requirements/functional.md)  
- [Non‑Functional Requirements](../requirements/non-functional.md)  
- [API Overview](../api/overview.md)  
- [Use Cases Overview](../usecases/level-1-onboarding.md)  
- [Glossary](../glossary.md)

---

[⬅️ Back to Intro](../intro.md)  
[➡️ Next: Requirements](../requirements/functional.md)
