# Quickstart

This guide helps new contributors get started with the NovaEco Core quickly.

---

## Prerequisites
- Docker Desktop
- VS Code with Remote Containers extension
- Git installed

---

## Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/novaeco-tech/ecosystem-core.git
   ```
2. Open the folder in VS Code.
3. Reopen in Container when prompted.
4. Run services locally:
   - App: http://localhost:5000
   - Website: http://localhost:3000
   - API Gateway: http://localhost:8000/health
   - Auth: http://localhost:9000/health

---

## First API Call
```bash
curl -X GET http://localhost:8000/health
```

---

## Next Steps
- Explore [Architecture Overview](../architecture/overview.md).
- Review [Functional Requirements](../requirements/functional.md).
- Try [API Examples](../api/examples.md).
