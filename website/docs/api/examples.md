# API Examples

## Example: User Login
```bash
curl -X POST https://auth.novaeco.tech/login \
  -d '{"username":"claudiu","password":"secret"}'
```

## Example: Fetch Sustainability Dashboard
```bash
curl -H "Authorization: Bearer <token>" \
  https://api.novaeco.tech/dashboard
```

## Example: Submit DPP
```bash
curl -X POST https://api.novaeco.tech/dpp \
  -H "Authorization: Bearer <token>" \
  -d '{"productId":"123","material":"steel"}'
```