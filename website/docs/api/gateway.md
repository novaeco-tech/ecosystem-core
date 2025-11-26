# Gateway API

The Gateway service (`/api`) is the single entry point for ecosystem data.

## Endpoints
- `GET /health` — Health check.
- `GET /projects` — List projects in NovaEco.
- `POST /projects` — Create a new project.
- `GET /lca` — Retrieve LCA data.
- `POST /dpp` — Submit Digital Product Passport data.

## Notes
- All requests require authentication via Auth service.
- Responses are JSON with standardized error codes.
