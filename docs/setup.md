# Setup

!!! note "Source code"
    The Crash source code is private. These steps are for people with access to the repository. To see the game, [play it live](https://crash.4zam.dev).

---

## Requirements

- Docker with Docker Compose 2.24 or newer
- Python 3, curl, `flock` and `ss` (used by the deploy script)
- Node.js 20.19 or newer, only for working on the frontend alone

You do not need a Bitcoin node or a Redis server: the stack runs its own.

---

## Run the whole stack locally

The production Compose file runs locally as the `local` stack. It uses plain HTTP, generates throwaway secrets and allows guest sign-in only.

```bash
git rev-parse HEAD > REVISION
bash deploy/deploy.sh --stack local
```

Then open <http://crash.localhost:18099>.

!!! info "Rounds pause until a chain is sealed"
    The game only runs rounds covered by a sealed fairness chain. A fresh local stack shows "Rounds are paused" until one is set up. The repository's fairness seeding runbook covers this.

---

## Frontend only

To work on the frontend against a backend that is already running:

```bash
cd frontend
npm ci
npm run dev
```

The dev server runs on <http://localhost:5173> and proxies `/api` and `/ws` to the backend, so the app talks to it the same way it does in production.

---

## Tests

- Backend: `pytest` in `backend/`, against a PostgreSQL and a Redis.
- Frontend: `npm run lint`, `npm run test:unit` and `npm run build` in `frontend/`.
- Deploy package: the scripts in `deploy/tests/`, including a full smoke test of the production stack.
