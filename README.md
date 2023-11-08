> See also https://github.com/KatSick/personal-cloud

# Overview

TODO(ostap): link to digital garden

# Setup

- Raspberry Pi 4 (or 400)
- Installed docker
- Ability to connect via SSH

# Deploy

You need to have access to manager instance (ssh://xxxx@xx.xx.xx.xx) with done ssh-copy-id then:

```bash
DOCKER_HOST=ssh://xxx@xxxxxx docker-compose up --detach --build --remove-orphans
```

# Destroy (including data)

```bash
docker-compose stop
docker rm $(docker ps -a -q) -f
docker system prune -a -f
```
