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

# Services

Enabled by default: **pihole** (network-wide DNS ad-blocker), **tsdproxy**
(exposes labelled containers as their own tailnet HTTPS nodes), and **homepage**
(dashboard).

The remaining services — **dockge**, **aiostreams**, **dozzle**, **wud** — sit
behind the `extras` Compose profile and stay off by default. Enable them with:

```bash
docker compose --profile extras up --detach --remove-orphans
```

# Destroy (including data)

```bash
docker compose down --volumes --remove-orphans
```
