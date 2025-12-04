# 🎮 NovaEco Mission Control (App)

> **The Dashboard of the Ecosystem.**
> The central launchpad for discovering sectors, managing identity, and viewing system-wide status.

## 📖 Overview

The **Mission Control App** is the user-facing "Home Screen" of the NovaEco. It provides a unified entry point for users before they jump into specific vertical sectors (like NovaAgro or NovaTrade).

* **Role:** Launchpad & Dashboard
* **Technology:** Python (Flask) + Jinja2 / HTML
* **Port:** `5000` (Public/Local)
* **Dependency:** Consumes the **Core API Gateway** for data.

---

## 🏗️ Architecture

This service follows the **Federated UI** pattern. It does not contain business logic for sectors; instead, it aggregates links and status from the Core Gateway.

```mermaid
graph TD
    User((Browser)) -->|HTML/CSS| App[Mission Control]
    
    subgraph "Backend"
        App -->|Fetch Config| Gateway[NovaEco API]
        App -->|Redirect| Auth[NovaEco Auth]
    end
    
    subgraph "External Sectors"
        App -.->|Deep Link| Agro[NovaAgro App]
        App -.->|Deep Link| Mind[NovaMind App]
    end