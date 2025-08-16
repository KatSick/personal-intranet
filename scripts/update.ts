import { $ } from "bun";

await $`docker compose pull`;
await $`docker compose up -d --remove-orphans`;
await $`docker system prune -a`;
