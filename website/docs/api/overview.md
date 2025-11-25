# API Overview

The NovaEco exposes APIs through the **Gateway** service (`/api`) and the **Auth** service (`/auth`).

## Principles
- **Unified Gateway:** All requests flow through a single entry point.
- **Secure Access:** OAuth2 authentication and API keys.
- **Consistency:** JSON responses, standardized error codes.
- **Transparency:** Public documentation and versioning.

## Available Services
- **Gateway:** Central REST API for data and orchestration.
- **Auth:** Identity and access management.
- **Sector APIs:** Each enabler/sector exposes its own endpoints.

---

## Related Pages
- [Auth API](./auth.md)
- [Gateway API](./gateway.md)
- [API Examples](./examples.md)
- [API Testing](./testing.md)
- [Developers: Setup](../developers/setup.md)

[⬅️ Back to Intro](../intro.md)

[⬅️ Previous: Use Cases (Level 1 Onboarding)](../usecases/level-1-onboarding.md)  
[Next: Developer Setup ➡️](../developers/setup.md)