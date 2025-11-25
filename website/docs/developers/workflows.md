# CI/CD Workflows

NovaEco uses GitHub Actions for testing and publishing.

## CI (ci-pr.yml)
- Runs on pull requests and pushes to `main`.
- Tests API, App, Auth (Python) and Website (Node.js).
- Uses containerized environments for consistency.

## Publish Workflows
- **publish-api.yml** — Packages API service.
- **publish-app.yml** — Packages App service.
- **publish-auth.yml** — Packages Auth service.
- **publish-website.yml** — Packages Website.

## Best Practices
- Commit small, atomic changes.
- Ensure tests pass locally before PR.
- Use ADRs for architectural decisions.
