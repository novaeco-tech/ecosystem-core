# CI/CD Workflows

NovaEco uses a sophisticated **System-of-Systems** pipeline that separates testing (CI) from release orchestration (CD).

---

## 1. Continuous Integration (CI)

**File:** `.github/workflows/ci.yml`

This workflow is the "Gatekeeper" for code quality. It runs on every Pull Request and every commit to `main`.

* **Scope:** Runs **Intra-repo** unit and integration tests.
* **Efficiency:** It uses path filtering to only test the services that changed (e.g., modifying `/website` won't trigger `/api` tests).
* **Artifacts:** **None.** This workflow never publishes artifacts or releases.
* **Environment:** Tests run inside standard Docker containers (`ghcr.io/novaeco-tech/dev-python`) to match the local DevContainer environment.

---

## 2. Continuous Deployment (CD)

**Files:** `.github/workflows/publish-[service].yml` (e.g., `publish-api.yml`)

These workflows handle the creation of stable artifacts. They implement an **Idempotent Release Strategy**.

### The Logic Flow
1.  **Trigger:** Runs on every push to `main` that affects a service folder.
2.  **Version Check:** It reads the local `VERSION` file (or `package.json`).
    * **If Tag Exists:** The workflow stops (idempotent).
    * **If New Version:** It proceeds to release.
3.  **Defensive Testing:** Runs the unit tests *one last time* to ensure we never release a broken artifact.
4.  **Build:** Creates a source tarball with a **Fully Qualified Name** (without version suffix).
    * *Format:* `[repo]-[service].tar.gz`
    * *Example:* `ecosystem-core-api.tar.gz`
5.  **Release:** Automatically creates the Git Tag (e.g., `ecosystem-core-api-v1.2.1`) and GitHub Release.

---

## 3. The QA Signal (System-of-Systems)

This is the bridge between the Open Source repositories and the Ecosystem QA.

* **Trigger:** Successfully publishing an artifact triggers the **Signal** step in the publish workflow.
* **Mechanism:** A **GitHub App** generates a short-lived token to dispatch a `qa-run` event to the `ecosystem-qa` repository.
* **Payload:** The signal contains the exact version tag and artifact name.
* **Result:** `ecosystem-qa` spins up a dynamic test environment combining this new artifact with stable versions of other sectors to run **Inter-repo** integration tests.

---

## Summary of Lifecycle

| Action | Workflow | Result |
| :--- | :--- | :--- |
| **Open PR** | `ci.yml` | Tests run. Branch protection turns green. |
| **Merge PR** (No version change) | `ci.yml` + `publish-*.yml` | Tests run. Publish workflow skips (Tag exists). |
| **Merge PR** (Bump `api/VERSION`) | `publish-api.yml` | Tests run. **New Tag & Release created.** Signal sent to QA. |