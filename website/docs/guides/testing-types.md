# Test Types Reference

**Detailed definitions, best practices, and inputs/outputs for every test type in the NovaEco Strategy.**

Use this reference to understand *how* to implement a specific test type listed in the [Testing Guide](./testing-guide.md).

---

## 1. Local Loop (Developer)

### Unit Testing
* **Goal:** Isolate and verify single functions or classes.
* **Tools:** `pytest` (Python), `jest` (Node).
* **Best Practices:** Mock all external dependencies (DB, Network). Target &lt; 100ms runtime.
* **Input:** Source Code. **Output:** Coverage Report.

### Static Analysis
* **Goal:** Enforce style and surface bugs without execution.
* **Tools:** `Ruff` / `Flake8` (Python), `ESLint` (Node).
* **Best Practices:** Run on every file save (Pre-commit hook).

### Local E2E (Component)
* **Goal:** Verify UI logic and frontend routing in isolation.
* **Tools:** `Playwright`, `Cypress`.
* **Context:** Runs in Local CI. Backend is **stubbed/mocked**.
* **Input:** Source Code + Mock Data.

### Micro-Benchmarking
* **Goal:** Verify algorithmic efficiency of critical hot-paths.
* **Tools:** `pytest-benchmark`.
* **Constraint:** Strict timing budgets (e.g., "Hashing must take &lt; 5ms").

### API Contract Testing
* **Goal:** Generate and verify Pact contracts between Consumer and Producer.
* **Tools:** `Pact`.
* **Context:** Runs in Local CI. Prevents breaking changes before merge.

### Security (SAST)
* **Goal:** Static Application Security Testing. Scan code for known vulnerabilities.
* **Tools:** GitHub Advanced Security, SonarQube.
* **Best Practices:** Fail build on "High" or "Critical" severity.

### Local Integration
* **Goal:** Validate interactions between the service and its *immediate* dependencies (DB, Cache).
* **Tools:** `Testcontainers`, `Docker Compose`.
* **Best Practices:** Use real database containers, but stub external HTTP APIs (e.g., mock the Gateway).

### Usability & Accessibility (Automated)
* **Goal:** Compliance with WCAG standards during development.
* **Tools:** `Axe`, `Lighthouse` (CI).
* **Context:** Runs in Local CI (Headless). Fails build on accessibility violations.

---

## 2. Global QA Loop (System)

### System Testing (End-to-End)
* **Goal:** Validate the full stack from UI to Database across multiple containers.
* **Tools:** `Playwright`, `Selenium`.
* **Context:** Runs in `novaeco-qa`. Uses **System Requirements** (Level 2).
* **Data:** Synthetic/Seeded.

### Acceptance Testing
* **Goal:** Validate business requirements and User Journeys.
* **Tools:** `Pytest-BDD` or standard `Pytest`.
* **Context:** Runs in `novaeco-qa`. Uses **Global Use Cases** (Level 1).
* **Example:** "Bakery lists waste -> Trade matches -> Logistics moves."

### Smoke Testing
* **Goal:** Quick sanity check on a Release Candidate.
* **Method:** "Can I log in?", "Is the Homepage 200 OK?", "Are all containers Healthy?".
* **Constraint:** Must run in < 5 minutes.

---

## 3. Operational Loop (Staging/Prod)

### Performance (Load & Stress)
* **Goal:** Simulate city-scale traffic.
* **Tools:** `k6`, `Gatling`.
* **Types:**
    * *Load:* Steady traffic to measure throughput.
    * *Stress:* Peak traffic to find breaking points.
    * *Soak:* Long-duration traffic to find memory leaks.

### Security (DAST / Pentest)
* **Goal:** Dynamic Application Security Testing. Attack a running application.
* **Tools:** `OWASP ZAP`, `Burp Suite`.
* **Best Practices:** Run against Staging. Never run destructive scans on Production without authorization.

### Chaos & Resilience
* **Goal:** Inject faults to verify self-healing.
* **Tools:** `Chaos Toolkit`.
* **Scenarios:** "Kill the Auth DB", "Add 500ms latency to Gateway", "Partition the network".

### Compliance & Auditing
* **Goal:** Verify adherence to regulations (GDPR, EU Taxonomy).
* **Method:** Policy-as-Code checks (e.g., verifying Audit Logs are being written).

### Usability (Human)
* **Goal:** Verify user experience with real humans (UAT).
* **Context:** Beta / UAT environment.
* **Method:** Manual testing scripts executed by Product Owners or Beta Testers.