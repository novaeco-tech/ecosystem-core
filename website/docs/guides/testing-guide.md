# Testing Strategy & Implementation

**The NovaEco Quality Assurance Framework.**
A comprehensive guide to how we verify the ecosystem across Local, Global, and Operational layers.

---

## 📖 Philosophy: Distributed Definition, Centralized Verification

NovaEco operates as a **System-of-Systems**. Our testing strategy reflects this by enforcing clear boundaries between the **Open Source Factory** (`novaeco-tech`) and the **Operational Environment** (`circular-engineering`).

We adhere to the **5-Level V-Model** (see [V-Model Guide](./v-model-guide.md)) to ensure bidirectional traceability.

### The Three Testing Loops

1.  **The Developer Loop (Local):**
    * **Goal:** "Does my code work in isolation?"
    * **Where:** Inside individual repositories (e.g., `novaagro`, `novamind`).
    * **Artifacts:** Source Code, Dev Builds.
    * **Frequency:** Every Commit / PR.

2.  **The QA Loop (Global):**
    * **Goal:** "Do the components work together?"
    * **Where:** `novaeco-qa` repository.
    * **Artifacts:** Stable Artifacts (Release Candidates).
    * **Frequency:** On Release / Nightly.

3.  **The Operational Loop (Staging/Prod):**
    * **Goal:** "Is it secure, performant, and compliant at scale?"
    * **Where:** `circular-engineering` (Private Infrastructure).
    * **Artifacts:** Promoted Binaries + Production Configs.
    * **Frequency:** Pre-Production / Scheduled Audits.

---

## 🗺️ The Master Testing Matrix

This matrix maps every test type to its owner, environment, and V-Model level.

| Level | Test Type | Owner | Environment | Data Strategy |
| :--- | :--- | :--- | :--- | :--- |
| **L5** | **Unit Testing** | Local Repo | CI / DevContainer | Mocked Dependencies |
| **L5** | **Static Analysis** | Local Repo | CI | N/A |
| **L5** | **Security (SAST)** | Local Repo | CI | N/A |
| **L5** | **Micro-Benchmarking** | Local Repo | CI | N/A |
| **L4** | **Local Integration** | Local Repo | Docker Compose | Local Seeding / Stubs |
| **L4** | **API Contract** | Local Repo | CI | Pact / Schemas |
| **L3** | **Local E2E** | Local Repo | CI (Headless) | Stubbed Backend |
| **L3** | **Usability (Automated)** | Local Repo | CI (Headless) | Synthetic |
| **L2** | **System Integration** | NovaEco QA | Docker Swarm | Real Inter-service Traffic |
| **L1** | **Global E2E (System)** | NovaEco QA | Docker Swarm | Synthetic User Flows |
| **L1** | **Smoke Testing** | NovaEco QA | Docker Swarm | Critical Path Only |
| **Ops**| **Security (DAST)** | Private Ops | Staging | Anonymized Real Data |
| **Ops**| **Performance (Load)** | Private Ops | Staging | Synthetic Traffic |
| **Ops**| **Chaos / Resilience** | Private Ops | Staging / Prod | Fault Injection |
| **Ops**| **Usability (Human)** | Private Ops | Beta / UAT | Real Users |
| **Ops**| **Compliance** | Private Ops | Staging | Policy-as-Code Scans |

> **Note:** For detailed definitions of each test type, see [Test Types Reference](./testing-types.md).

---

## 📂 Global QA Directory Structure

The `novaeco-qa` repository acts as the central verification hub. It follows this standardized layout to ensure tests are discoverable.

```text
novaeco-qa/
├── tests/
│   ├── e2e/                        # End-to-End System Tests
│   │   ├── global/                 # L1: Global E2E User Journeys
│   │   │   └── level4_complex/
│   │   ├── system/                 # L2: Inter-service Functionality
│   │   │   ├── level2_easy/
│   │   │   └── level3_medium/
│   │   └── specs/                  # Shared test specifications (Playwright/Cypress)
│   │
│   ├── integration/                # API-Level Tests (No UI)
│   │   └── workflows/              # Multi-step API sequences (Pytest)
│   │
│   ├── performance/                # Load Testing Scripts (Executed in Staging)
│   │   ├── k6/                     # k6 scripts for generic load
│   │   └── scenarios/              # Specific profiles (Spike, Soak)
│   │
│   ├── security/                   # Security Scans (Executed in Staging)
│   │   └── dast/                   # OWASP ZAP configurations
│   │
│   ├── chaos/                      # Resilience Experiments (Executed in Staging)
│   │   └── chaostoolkit/           # Declarative chaos definitions
│   │
│   └── shared/                     # Utilities
│       ├── fixtures/               # Reusable Pytest fixtures
│       └── data_factories/         # Synthetic data generators
````

-----

## 🧪 Test Data Management

Data is the fuel for testing. We use different strategies depending on the loop.

### 1\. Synthetic Data (Local & Global QA)

  * **Definition:** Generated on-the-fly using factories (e.g., `Faker`, `FactoryBoy`).
  * **Usage:** Used for Unit, Integration, and **Global E2E** tests.
  * **Benefit:** Zero privacy risk, deterministic, fast setup.

### 2\. Seeded Data (Global QA)

  * **Definition:** Static datasets (JSON/SQL) loaded at container startup.
  * **Usage:** Populating "Reference Data" (e.g., Crop Types in NovaAgro, Material Densities in NovaMake).
  * **Location:** `novaeco-qa/tests/shared/fixtures/`.

### 3\. Anonymized Production Data (Operational)

  * **Definition:** Real data scrubbed of PII (Personally Identifiable Information).
  * **Usage:** **Strictly limited** to `circular-engineering` Staging environments for DAST and Load Testing.
  * **Rule:** Real user data **NEVER** enters the `novaeco-tech` (Open Source) CI pipelines.

-----

## 🧰 Toolchain & Technology

We standardize tools to reduce cognitive load.

| Category | Tool | Why? |
| :--- | :--- | :--- |
| **Unit/Integration** | **Pytest** | Standard for Python ecosystem. Powerful fixtures. |
| **E2E / UI** | **Playwright** | Fast, reliable, supports multi-tab workflows (critical for OAuth). |
| **API Testing** | **Requests + Pytest** | Simple, maintainable, easy to debug. |
| **Load Testing** | **k6** | Developer-friendly (JS), highly performant for CI. |
| **Security** | **OWASP ZAP** | Industry standard for DAST scanning. |
| **Chaos** | **Chaos Toolkit** | Declarative, platform-agnostic resilience testing. |

-----

## 🚀 Execution Guide

### Running Local Tests

Inside any component repo (`novaagro`, `novamind`):

```bash
# Unit Tests
make test-unit

# Local Integration (Docker Compose)
make test-int
```

### Running Global Tests

Inside `novaeco-qa`:

```bash
# Run all Level 2 System Integration Tests
pytest tests/e2e/system/level2_easy

# Run a specific L1 Global E2E Case
pytest tests/e2e/global/level4_complex/test_c1_city_challenge.py
```

```
```