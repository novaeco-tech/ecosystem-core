# ADR-001: Core Services Monorepo

## Context
The NovaEco requires a unified repository to manage its four central services.

## Decision
We use a monorepo (`ecosystem-core`) with DevContainers to simplify local development and ensure consistent environments.

## Consequences
- Easier onboarding for contributors.
- Shared CI/CD workflows.
- Clear separation of services while maintaining a single source of truth.
