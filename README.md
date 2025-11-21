# Welcome to the Nova Ecosystem Core

This is the "heart" of the Nova Ecosystem.
It's a monorepo containing the four central services that power the entire platform.

## 🏗️ Architecture Overview

| Service | Path | Type | Port | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Gateway** | `/api` | **Python/Flask** | `8000` | Central REST API Gateway. The single "front door" for all data. |
| **Dashboard** | `/app` | **Python/Flask** | `5000` | "Mission Control" dashboard (Server-Side Rendered). |
| **Identity** | `/auth` | **Python/Flask** | `9000` | SSO & Identity provider (OAuth2). Handles login/signup. |
| **Docs** | `/website` | **Node.js** | `3000` | The public documentation site (Docusaurus). |

## 🚀 Getting Started (Local Development)

This repository is configured to use **DevContainers** for a one-click setup.

1.  Make sure you have [docker desktop](https://www.docker.com/products/docker-desktop/) installed and running.
2.  Install the [remote containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) in VS Code.
3.  Clone this repository: `git clone https://github.com/nova-ecosystem/ecosystem-core.git`
4.  Open the cloned folder in VS Code.
5.  A pop-up will appear: "Folder contains a Dev Container... Reopen in Container?". Click **"Reopen in Container"**.

This will build the Docker-Compose environment defined in `.devcontainer/` and automatically start all four services.

### 🖥️ Accessing the Services

Once the container is running, the services are available locally:

  * **Dashboard App:** [http://localhost:5000](http://localhost:5000)
  * **Public Website:** [http://localhost:3000](http://localhost:3000)
  * **API Health Check:** [http://localhost:8000/health](http://localhost:8000/health)
  * **Auth Health Check:** [http://localhost:9000/health](http://localhost:9000/health)

## 🛠️ Development Workflow

The ecosystem runs as **4 separate containers** (App, Website, API, Auth).
When you open this repo in VS Code, it attaches to the **App** service by default.
The other services (`website`, `api`, `auth`) are running in the background.

### 🧰 Developer Tools (Nova CLI)

We use the internal `nova` CLI to manage versions and automation.

**Installation**
The CLI is installed automatically in the DevContainer. If you need to reinstall it manually:

```bash
pip install "git+https://github.com/nova-ecosystem/ecosystem-devtools.git@main#subdirectory=nova-cli"
````

**Usage**

  * **Patching a Service (Bug Fixes):**
    Increments the patch version (e.g., `1.0.1` -\> `1.0.2`).

    ```bash
    nova version patch auth
    ```

  * **Releasing a Feature (Minor/Major):**
    Updates the Global version and aligns ALL services (e.g., `1.1.0`).

    ```bash
    nova version release minor
    ```

### 💻 Switching to Website, API, or Auth

To run commands for a specific service (e.g., installing a new npm package for the website), you must **attach** to its container.

1.  **Click the "Remote Explorer" icon** in the VS Code sidebar (looks like a monitor).
2.  Look under the **"Other Containers"** list.
3.  Right-click the service you want (e.g., `ecosystem-core_devcontainer-website-1`).
4.  Select **"Attach to Visual Studio Code"**.

**Result:** A **new VS Code window** opens for that service.
You can use the terminal in this new window to run service-specific commands (e.g., `npm install`, `pip install`).

### ⚠️ "Port Already in Use" Warning

If you attach to the **Website** container and try to run `npm start`, you might see:

> *" Something is already running on port 3000"*

**This is normal/good.** It means the container automatically started the server for you.

  * **You do NOT need to run `npm start` manually.**
      * Just edit your files.
        The running server will detect changes and **hot-reload automatically**.
        Use the terminal only for tasks like adding dependencies (`npm install <package>`).

### Running Tests

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
    # Run in the main window
    pytest tests/integration
    ```