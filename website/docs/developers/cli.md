# NovaEco CLI

The NovaEco CLI manages versions and automation.

## Installation
Installed automatically in DevContainers. Manual install:
```bash
pip install "git+https://github.com/novaeco-tech/ecosystem-devtools.git@main#subdirectory=novaeco-cli"
```

## Usage
- **Patch a Service:**  
  ```bash
  novaeco version patch auth
  ```
- **Release a Feature:**  
  ```bash
  novaeco version release minor