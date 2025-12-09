# V-Model & Requirements Engineering

**How we translate user needs into verified code.** A comprehensive guide to the V-Model, testing strategies, and requirements traceability in the NovaEco System-of-Systems.

---

## 📖 The Philosophy: The 5-Level V-Model

NovaEco uses a **5-Level V-Model** to manage complexity. This model enforces **Bidirectional Traceability** to ensure we build the right thing (Validation) and build it correctly (Verification).

![V-Model Diagram](../../static/img/guides/v-model.jpg)

**"Why are we building this?"** (Top-Down)
Requirements flow downwards. High-level goals are broken into technical specifications.

  * **Trace:** **L1 User Need** ("Recycle Phone") $\to$ **L2 System Req** ("Identify Model") $\to$ **L4 Component Spec** ("API accepts Serial Number").
  * **Benefit:** Change Impact Analysis. If a Strategic Goal changes, we know exactly which API endpoints are affected.

### 2. Horizontal Traceability (Verification)

**"Did we build it right?"** (Left-Right)
Every definition artifact on the **Left** corresponds to a specific test suite on the **Right**.

  * **Trace:** **Requirement ID** (`REQ-AGRO-001`) $\leftrightarrow$ **Test Tag** (`@pytest.mark.requirement(...)`).
  * **Benefit:** Coverage Analysis. We can mathematically prove that every requirement has a passing test.

---

## 📐 The 5 Levels: Inputs, Outputs & Artifacts

### Level 1: Systemic Needs (Acceptance)

**Scope:** The entire ecosystem working in concert to solve a real-world problem.

| Phase | Responsibility | Inputs | Action | Artifact (Output) |
| :--- | :--- | :--- | :--- | :--- |
| **Definition**<br/>(Left) | **Product Owner**<br/>(Global) | Strategic Roadmap,<br/>Sustainability Goals | Define cross-sector User Journeys. | **Global Use Cases**<br/>`novaeco/website/docs/usecases/level4.md`<br/>*(e.g., [C1] City Challenge)* |
| **Verification**<br/>(Right) | **NovaEco QA**<br/>(Global) | Global Use Cases,<br/>Stable Release | Simulate full user flows across containers. | **Acceptance Test Report**<br/>`novaeco-qa/tests/e2e/acceptance/`<br/>*(Pass/Fail of Use Case)* |

-----

### Level 2: System Requirements (Integration)

**Scope:** Interactions between multiple services via network protocols.

| Phase | Responsibility | Inputs | Action | Artifact (Output) |
| :--- | :--- | :--- | :--- | :--- |
| **Definition**<br/>(Left) | **System Architect**<br/>(Global/Local) | Global Use Cases,<br/>ADRs | Decompose journeys into functional rules and performance constraints. | **Functional & Non-Functional Reqs**<br/>`[repo]/docs/requirements/functional.md`<br/>*(e.g., REQ-AGRO-FUNC-001)* |
| **Verification**<br/>(Right) | **NovaEco QA**<br/>(Global) | Functional Reqs,<br/>Docker Containers | Execute inter-service API calls (Real Traffic). | **System Integration Report**<br/>`novaeco-qa/tests/e2e/system/`<br/>*(Traceability Matrix)* |

**Example Requirements:**

  * **Functional:** `REQ-AGRO-FUNC-001` "Agro API must query Mind API for image analysis."
  * **Non-Functional:** `REQ-AGRO-PERF-001` "End-to-end analysis must complete in \< 200ms."

---

### Level 3: Component E2E (System E2E)

**Scope:** The user interface or entry point of a single component, treated as a "Black Box."

| Phase | Responsibility | Inputs | Action | Artifact (Output) |
| :--- | :--- | :--- | :--- | :--- |
| **Definition**<br/>(Left) | **UX Designer**<br/>(Local) | Functional Reqs,<br/>UI Mockups | Define UI behavior, Accessibility rules, and Local Use Cases. | **UI/UX Specs**<br/>`[repo]/docs/requirements/non-functional.md`<br/>*(e.g., REQ-UI-ACCESS-001)* |
| **Verification**<br/>(Right) | **Developer**<br/>(Local) | Local Use Case,<br/>Frontend Build | Run Playwright/Cypress/Lighthouse. | **Local E2E Report**<br/>`[repo]/tests/e2e/`<br/>*(e.g., test_homepage.spec.ts)* |

**Example Requirements:**

  * **Functional:** `REQ-UI-FUNC-001` "Clicking 'Scan' opens the camera."
  * **Non-Functional:** `REQ-UI-ACCESS-001` "All buttons must have ARIA labels (Lighthouse Score 100)."

---

### Level 4: Service Integration (Component Integration)

**Scope:** The internal plumbing of a monorepo (API $\leftrightarrow$ Auth $\leftrightarrow$ DB).

| Phase | Responsibility | Inputs | Action | Artifact (Output) |
| :--- | :--- | :--- | :--- | :--- |
| **Definition**<br/>(Left) | **Tech Lead**<br/>(Local) | System Reqs,<br/>Architecture Patterns | Define API Contracts (Proto/OpenAPI) and Security Policies. | **API Specs & Security Policy**<br/>`[repo]/api/proto/v1/*.proto`<br/>*(e.g., REQ-SEC-AUTH-001)* |
| **Verification**<br/>(Right) | **Developer**<br/>(Local) | API Specs,<br/>Docker Compose | Test container startup, internal wiring, and contract adherence. | **Local Integration Report**<br/>`[repo]/tests/integration/`<br/>*(e.g., test_auth_flow.py)* |

**Example Requirements:**

  * **Functional:** `REQ-API-FUNC-001` "The `/health` endpoint returns 200 OK."
  * **Non-Functional:** `REQ-SEC-AUTH-001` "The service must verify JWT signatures using the public key."

---

### Level 5: Implementation (Unit)

**Scope:** Individual functions, classes, and logic blocks.

| Phase | Responsibility | Inputs | Action | Artifact (Output) |
| :--- | :--- | :--- | :--- | :--- |
| **Definition**<br />(Left) | **Developer**<br />(Local) | API Specs,<br />Algorithms | Write code logic, algorithmic efficiency rules, and docstrings. | **Source Code**<br />`[repo]/api/src/`<br />*(e.g., calculations.py)* |
| **Verification**<br />(Right) | **Developer**<br />(Local) | Source Code | Test logic with mocked dependencies. | **Unit Test Report**<br />`[repo]/api/tests/unit/`<br />*(Coverage %, Benchmark)* |

**Example Requirements:**

  * **Functional:** `REQ-CODE-FUNC-001` "Function `calculate_npk()` returns correct float."
  * **Non-Functional:** `REQ-CODE-PERF-001` "Function execution time \< 5ms (Micro-benchmark)."

---

## 4. Artifact Location & Independence Strategy

To maintain a "Federated" architecture, we enforce strict rules on where Requirements and Use Cases live.

### The Location Map

| Artifact | Level | Location | Purpose |
| :--- | :--- | :--- | :--- |
| **Global Use Case** | **L1** | `novaeco/website/docs/usecases/` | Defines cross-sector journeys (e.g., "City Challenge"). **Only Core defines these.** |
| **System Requirement** | **L2** | `[repo]/website/docs/requirements/` | Defines a technical capability (e.g., "API must accept JPG"). |
| **Local User Story** | **L3** | Embedded in `requirements/*.md` | Defines the specific interaction (e.g., "As a user, I upload a file..."). |

### The "Component Independence" Rule

**Q: Can I build a feature in `novaagro` if there is no Global Use Case for it yet?**

**A: YES.**
We encourage **Component Independence**. You do not need a Global Parent (L1) to define a Local Requirement (L2).

1.  **Define it as a Capability:** Create the requirement (e.g., `REQ-AGRO-FUNC-050`) in your local repo.
2.  **Test it Locally:** Write a Local E2E test (Level 3) to verify it works in isolation (mocking external dependencies).
3.  **Traceability:** The Requirement is considered "Verified" by the Local Test. It is simply "Orphaned" (unused by Global) until a Global Use Case claims it.

---

## 🗺️ The Master Testing Matrix

This table assigns every test type from our **Test Strategy** (`test-types.md`) to a specific owner and repository.

### Phase 1: Local (The Developer Loop)

**Owner:** `novaeco-tech/[repo]`
**Env:** DevContainer / CI

| Test Type | V-Model Level | Directory Path | Purpose |
| :--- | :--- | :--- | :--- |
| **Unit Testing** | **L5** | `api/tests/unit/` | Verify logic correctness (Mocked IO). |
| **Micro-Benchmarking** | **L5** | `tests/performance/micro/` | Verify algorithmic speed (NFR). |
| **Static Analysis** | **L5** | `.github/workflows/lint.yml` | Code style and security scanning. |
| **Security (SAST)** | **L5** | `.github/workflows/sast.yml` | CodeQL / SonarQube scans. |
| **API Contract** | **L4** | `tests/integration/contracts/` | Verify Pact contracts against local schema. |
| **Local Integration** | **L4** | `tests/integration/` | Verify service contracts (Container startup). |
| **Local E2E** | **L3** | `tests/e2e/specs/` | Verify UI/Dashboard functionality (Stubbed API). |
| **Usability (Automated)** | **L3** | `tests/accessibility/` | Automated Lighthouse/Axe scans (NFR). |

### Phase 2: Global (The QA Loop)

**Owner:** `novaeco-tech/novaeco-qa`
**Env:** Docker Compose (Ephemeral)

| Test Type | V-Model Level | Directory Path | Purpose |
| :--- | :--- | :--- | :--- |
| **System Testing** | **L2** | `tests/e2e/system/` | Verify Functional Requirements (Real Inter-service). |
| **Acceptance Testing** | **L1** | `tests/e2e/acceptance/` | Verify Global Use Cases (Full User Journey). |
| **Smoke Testing** | **L1** | `tests/e2e/smoke/` | Critical Path Sanity Check. |

### Phase 3: Operational (The Staging Loop)
**Owner:** `circular-engineering/novaeco-operations`  
**Env:** Kubernetes Staging / Production

| Test Type | Responsibility | Why here? |
| :--- | :--- | :--- |
| **Security (DAST)** | **Private Ops** | Requires a running, accessible URL. |
| **Performance (Load)** | **Private Ops** | Requires massive infrastructure to simulate city-scale traffic. |
| **Usability (Human)** | **Private Ops** | Requires real humans clicking through a Staging environment. |
| **Compliance** | **Private Ops** | Automated Policy-as-Code checks (GDPR/Audit). |
| **Chaos / Resilience** | **Private Ops** | Fault injection (latency, kill pods). |

---

## 🔗 Traceability Tooling

We enforce the link between Definition and Verification using the `novaeco` CLI.

### 1. The ID System
Every requirement must have a unique ID: `REQ-{COMPONENT}-{CATEGORY}-{ID}`.

### 2. The Verification Tag
Tests must "claim" a requirement using decorators.

**Python (Pytest):**
```python
@pytest.mark.requirement("REQ-AGRO-FUNC-005")
def test_nitrogen_calculation(): ...
```

### 3\. The Audit

Run the audit command to generate the **Traceability Matrix**:

```bash
novaeco audit traceability
```

**Output:**

```text
[PASS] REQ-AGRO-FUNC-005 (Level 2) -> Verified by novaeco-qa/tests/e2e/system/test_agro.py
[FAIL] REQ-AGRO-PERF-001 (Level 2) -> No verification found.
```