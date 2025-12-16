# Test Types Reference

**Detailed definitions, best practices, and inputs/outputs for every test type in the NovaEco Strategy.**

Use this reference to understand *how* to implement a specific test type listed in the [Testing Guide](./testing-guide.md).

---

## 1. Local Loop (Developer)

Tests executed inside individual component repositories (e.g., `novaagro`).

### [L5] Unit Testing
* **Goal:** Isolate and verify single functions or classes.
* **Tools:** `pytest` (Python), `jest` (Node).
* **Best Practices:** Mock all external dependencies (DB, Network, File System). Target &lt; 100ms runtime per test.
* **Input:** Source Code. **Output:** Coverage Report.

### [L5] Static Analysis
* **Goal:** Enforce style guidelines and detect surface bugs without execution.
* **Tools:** `Ruff` / `Flake8` (Python), `ESLint` (Node), `mypy` (Types).
* **Best Practices:** Run on every file save via Pre-commit hooks.

### [L5] Security (SAST)
* **Goal:** Static Application Security Testing. Scan source code for known vulnerabilities (e.g., hardcoded secrets, injection flaws).
* **Tools:** GitHub Advanced Security, SonarQube.
* **Best Practices:** Fail the build on "High" or "Critical" severity findings.

### [L5] Micro-Benchmarking
* **Goal:** Verify algorithmic efficiency of critical hot-paths (e.g., LCA calculation logic).
* **Tools:** `pytest-benchmark`.
* **Constraint:** Strict timing budgets (e.g., "Hashing must take &lt; 5ms").

### [L4] Local Integration
* **Goal:** Validate interactions between the service and its *immediate* infrastructure dependencies (DB, Cache, Queue).
* **Tools:** `Testcontainers`, `Docker Compose`.
* **Best Practices:** Spin up a real Postgres/Redis container, but stub external HTTP/gRPC APIs (e.g., mock the Gateway).

### [L4] API Contract Testing
* **Goal:** Verify that the service adheres to its declared interface (Pact/Schema).
* **Tools:** `Pact`, `Schemathesis`.
* **Context:** Runs in Local CI. Prevents breaking changes to shared interfaces (e.g., ProtoBufs) before merge.

### [L3] Local E2E (Component)
* **Goal:** Verify UI logic, state management, and frontend routing in isolation.
* **Tools:** `Playwright`, `Cypress`.
* **Context:** Runs in Local CI (Headless). The Backend is **stubbed/mocked** to test edge cases (e.g., error states) without spinning up the full stack.
* **Input:** Source Code + Mock Data.

### [L3] Usability & Accessibility (Automated)
* **Goal:** Ensure compliance with WCAG standards during development.
* **Tools:** `Axe`, `Lighthouse` (CI).
* **Context:** Runs in Local CI. Fails build on accessibility violations (e.g., missing ARIA labels).

---

## 2. Global QA Loop (System)

Tests executed in the `novaeco-qa` repository against a stable release candidate.

### [L2] System Integration
* **Goal:** Validate the full stack connectivity across multiple containers.
* **Tools:** `Playwright` (UI driven) or `Pytest` (API driven).
* **Context:** Uses real inter-service traffic (e.g., `NovaAgro` calls `NovaFin` via the Gateway).
* **Focus:** "Does the plumbing work?"

### [L1] Global E2E (System)
* **Goal:** Validate complex cross-sector business requirements and **Global Use Cases**.
* **Tools:** `Pytest-BDD` or standard `Pytest` workflows.
* **Context:** Uses **Synthetic/Seeded** data.
* **Example:** "Bakery lists waste (Trade) -> Farm buys it (Agro) -> Logistics moves it (Logistics)."

### [L1] Smoke Testing
* **Goal:** Quick sanity check on a Release Candidate before deep testing.
* **Method:** "Can I log in via Keycloak?", "Is the Gateway Health 200 OK?", "Does the Dashboard load?".
* **Constraint:** Must run in < 5 minutes.

---

## 3. Operational Loop (Staging/Prod)

Tests executed by `circular-engineering` on private infrastructure.

### [Ops] Performance (Load & Stress)
* **Goal:** Simulate city-scale traffic patterns.
* **Tools:** `k6`, `Gatling`.
* **Types:**
    * *Load:* Steady traffic to measure baseline throughput.
    * *Stress:* Peak traffic (spike testing) to find breaking points.
    * *Soak:* Long-duration traffic to identify memory leaks.

### [Ops] Security (DAST / Pentest)
* **Goal:** Dynamic Application Security Testing. Attack a running application to find runtime vulnerabilities.
* **Tools:** `OWASP ZAP`, `Burp Suite`.
* **Best Practices:** Run against Staging using anonymized production data. Never run destructive scans on Production without authorization.

### [Ops] Chaos & Resilience
* **Goal:** Inject faults to verify self-healing capabilities.
* **Tools:** `Chaos Toolkit`.
* **Scenarios:** "Kill the Auth DB", "Add 500ms latency to Gateway", "Partition the network between Agro and Finance".

### [Ops] Compliance & Auditing
* **Goal:** Verify adherence to regulations (GDPR, EU Taxonomy).
* **Method:** Policy-as-Code checks (e.g., verifying Audit Logs are being written to immutable storage).

### [Ops] Usability (Human)
* **Goal:** Verify user experience with real humans (User Acceptance Testing).
* **Context:** Beta / UAT environment.
* **Method:** Manual testing scripts executed by Product Owners or Beta Testers.