# Nova CLI

The Nova CLI manages versions and automation.

## Installation
Installed automatically in DevContainers. Manual install:
```bash
pip install "git+https://github.com/novaeco-tech/ecosystem-devtools.git@main#subdirectory=nova-cli"
```

## Usage
- **Patch a Service:**  
  ```bash
  nova version patch auth
  ```
- **Release a Feature:**  
  ```bash
  nova version release minor