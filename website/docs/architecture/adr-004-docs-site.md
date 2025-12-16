# ADR-004: Centralized Documentation Hub

Date: 2025-11-26
Status: Accepted

## Context
In a federated System-of-Systems, knowledge can easily become fragmented across dozens of repositories. A unified, accessible, and version-controlled source of truth is critical to align contributors, integrators, and stakeholders on architecture, governance, and standards.

## Decision
We use **Docusaurus** to build and host the central documentation platform (`novaeco.tech`), located in the `/website` directory of the Core Kernel repository (`novaeco`).

This site serves as the **Knowledge Aggregator** for the ecosystem, hosting:
1.  **Architecture & Governance:** ADRs, Principles, Policies, and interactive Mermaid diagrams.
2.  **Global Use Cases:** Cross-sector user journeys (Levels 1-4) and the "Use Case Matrix".
3.  **Core API References:** Documentation for the Gateway and Identity services.
4.  **Developer Guides:** Onboarding, tooling (CLI), and contribution standards.
5.  **Ecosystem Blog:** Central hub for release notes, announcements, and success stories.

## Consequences
### Positive
- **Single Source of Truth:** Prevents conflicting information by centralizing high-level standards.
- **Integrated Versioning:** Documentation matches the lifecycle of the Core Infrastructure (Gateway/Auth).
- **Contributor Onboarding:** New developers find everything they need (Quickstarts, CLI guides) in one place.

### Negative
- **Maintenance Overhead:** The Core team must actively curate content to ensure it accurately reflects the evolving capabilities of peripheral sectors (e.g., NovaAgro) without becoming stale.