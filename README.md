> See also https://github.com/KatSick/personal-cloud

# Overview

TODO(ostap): link to digital garden

# Setup

- A host with docker installed
- Copy `.env.example` to `.env` and fill in the values

# Deploy

Runs on this host's local docker. From the repo root:

```bash
docker compose up --detach --build --remove-orphans
```

# Destroy (including data)

```bash
docker compose down --volumes --remove-orphans
```
