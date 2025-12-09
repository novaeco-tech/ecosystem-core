# 🌍 NovaEco Core

**NovaEco** is the open‑source **Digital Public Infrastructure** for the circular economy.  
It connects individuals and siloed sectors to **foster innovation**, measure impact, and **collaborate** within a federated system-of-systems.

This repository (`novaeco`) is the "heart" of the system. It is a monorepo containing the four central services that anchor the entire platform.

---

## 🏗️ Architecture Overview

The Core repository hosts the kernel services that provide identity, access, and orchestration for the wider ecosystem.

| Service | Path | Type | Port | Public URL | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mission Control** | `/app` | Python/Flask | `5000` | `app.novaeco.tech` | **Dashboard.** Onboarding, discovery, and launchpad. |
| **Identity** | `/auth` | Python/Flask | `9000` | `auth.novaeco.tech` | **Digital Passport.** SSO & Trust Profile. |
| **Gateway** | `/api` | Python/Flask | `8000` | `api.novaeco.tech` | **API Gateway.** Secure access to all services. |
| **Docs** | `/website` | Node.js | `3000` | `novaeco.tech` | **Documentation.** Architecture and use cases. |

> **Looking for the rest of the ecosystem?** > NovaEco includes 10+ Enablers (e.g., NovaTrade, NovaMaterial) and 13+ Sectors (e.g., NovaAgro).  
> 👉 **[View Full Architecture & Service List](http://localhost:3000/docs/architecture/overview)** (once running) or visit [novaeco.tech](https://novaeco.tech).

### 🎮 The "Mission Control" Concept
The **App** (`/app`) acts as the "Home Screen" for the NovaEco. It is **read-heavy** and focuses on three specific functions:
1.  **Onboarding & Identity:** Handles Sign-up, Profile management, and Trust verification.
2.  **Aggregated Dashboard:** Displays a high-level summary of user activity (e.g., "Total CO₂ Saved").
3.  **App Launchpad:** Provides deep-links to jump into specific Sector apps (e.g., clicking "Farming" takes you to `agriculture.novaeco.tech`).

---

## 🚀 Getting Started (Local Development)

This repository is configured to use **DevContainers** for a one-click setup.

1.  Make sure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.
2.  Install the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension in VS Code.
3.  Clone this repository:  
    ```bash
    git clone https://github.com/novaeco-tech/novaeco.git
    ```
4.  Open the cloned folder in VS Code.
5.  A pop-up will appear: *"Folder contains a Dev Container... Reopen in Container?"*. Click **"Reopen in Container"**.

This will build the Docker-Compose environment defined in `.devcontainer/` and automatically start all four services.

### 🖥️ Accessing the Services

Once the container is running, the services are available locally:

* **Mission Control:** [http://localhost:5000](http://localhost:5000)
* **Website/Docs:** [http://localhost:3000](http://localhost:3000)
* **API Health:** [http://localhost:8000/health](http://localhost:8000/health)
* **Auth Health:** [http://localhost:9000/health](http://localhost:9000/health)

---

## 🛠️ Development Workflow

The NovaEco Core runs as **4 separate containers** (App, Website, API, Auth).  
When you open this repo in VS Code, it attaches to the **App** service by default.

**✅ All services start automatically.** You do not need to run `python app.py` or `npm start` manually. All four services launch immediately, connect to each other, and watch your files for changes (**hot-reload**).

### 🐛 Debugging the App (Manual Start)

By default, the App runs in the background. If you want to **attach a debugger (F5)** or control the execution manually, you need to switch the container to "sleep" mode.

1.  Open `.devcontainer/docker-compose.yml`.
2.  Find the `app` service and change the `command` line:
    ```yaml
    # CHANGE FROM (Auto-Start):
    # command: sh -c "pip install -r requirements.txt && python app.py"

    # TO (Debug Mode):
    command: sleep infinity
    ```
3.  Open the Command Palette (`Ctrl+Shift+P` / `F1`) and select **"Dev Containers: Rebuild Container"**.
4.  Once rebuilt, the App will **not** be running. You can now press **F5** or run `python -m src.app_service` in the terminal to start it with the debugger attached.

### 🧰 Developer Tools (NovaEco CLI)

We use the internal `novaeco` CLI to manage versions and automation.

**Installation** The CLI is installed automatically in the DevContainer. If you need to reinstall it manually:
```bash
pip install "git+https://github.com/novaeco-tech/novaeco-devtools.git@main#subdirectory=novaeco-cli"
```

**Usage**

  * **Patching a Service (Bug Fixes):**
    Increments the patch version (e.g., `1.0.1` -\> `1.0.2`).

    ```bash
    novaeco version patch auth
    ```
  * **Releasing a Feature (Minor/Major):**
    Updates the Global version and aligns ALL services (e.g., `1.1.0`).

    ```bash
    novaeco version release minor
    ```

### 💻 Switching to Website, API, or Auth

To run commands for a specific service (e.g., installing a new npm package for the website), you must **attach** to its container.

1.  **Click the "Remote Explorer" icon** in the VS Code sidebar (looks like a monitor).
2.  Look under the **"Other Containers"** list.
3.  Right-click the service you want (e.g., `novaeco_devcontainer-website-1`).
4.  Select **"Attach to Visual Studio Code"**.

**Result:** A **new VS Code window** opens for that service.
You can use the terminal in this new window to run service-specific commands (e.g., `npm install`, `pip install`).

### ⚠️ "Port Already in Use" Warning

If you attach to the **Website** container and try to run `npm start`, you might see:

> *"Something is already running on port 3000"*

**This is normal/good.** It means the container automatically started the server for you.

  * **You do NOT need to run `npm start` manually.**
  * Just edit your files. The running server will detect changes and **hot-reload automatically**.

---

## 🧪 Running Tests

  * **Python Tests (App, API, Auth):**
    ```bash
    # Run in the main window (App) or API/Auth attached windows
    pytest
    ```
  * **Website Tests (Node.js):**
    ```bash
    # You MUST attach to the Website container first
    npm test
    ```
  * **Integration Tests:**
    ```bash
    # Run in the main window(App) or API/Auth attached windows
    pytest tests/integration
    ```

  * **End 2 End (E2E) Tests:**
    ```bash
    # Run in the main window (App) or API/Auth attached windows
    pytest tests/e2e
    ```