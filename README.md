# Welcome to the Nova Ecosystem Core

This is the "heart" of the Nova Ecosystem. It's a monorepo containing the four central services that power the entire platform.

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

### Running Tests

Since most of our stack is Python, we primarily use `pytest`.

  * **Run All Python Tests (App, API, Auth):**
    ```bash
    # Runs tests for all Python services
    pytest
    ```
  * **Run Website Tests (Node.js):**
    ```bash
    cd website && npm test
    ```
  * **Run Integration Tests:**
    ```bash
    # Runs the top-level integration suite
    pytest tests/integration
    ```

### Accessing Terminals

To run commands for a specific service, open a terminal in VS Code and navigate to the service folder:

  * `cd app` / `cd api` / `cd auth` -\> Run **Python** commands (`pip`, `flask`, `pytest`)
  * `cd website` -\> Run **Node** commands (`npm`, `docusaurus`)