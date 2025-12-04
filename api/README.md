# ⛩️ NovaEco API Gateway

> **The Front Door of the Ecosystem.**
> A unified REST interface that routes public traffic to internal microservices (Enablers & Sectors).

## 📖 Overview

The **NovaEco API Gateway** is the single entry point for all external clients (Web Dashboards, Mobile Apps, IoT Devices). It enforces security, handles routing, and aggregates responses from the federated system-of-systems.

* **Role:** Reverse Proxy & Orchestrator
* **Protocol:** REST / JSON (Public) -> gRPC / REST (Internal)
* **Port:** `8000` (Public)
* **Auth:** Validates Bearer Tokens via `novaeco-auth` before routing.

---

## 🏗️ Architecture

```mermaid
graph LR
    Client((User/App)) -->|HTTPS/JSON| Gateway[NovaEco API]
    
    subgraph "Core Network"
        Gateway -->|Verify Token| Auth[NovaEco Auth]
        Gateway -->|Proxy Request| Agro[NovaAgro API]
        Gateway -->|Proxy Request| Trade[NovaTrade API]
        Gateway -->|Proxy Request| Mind[NovaMind API]
    end