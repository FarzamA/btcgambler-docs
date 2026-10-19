# Architecture

Crash runs as one Docker Compose stack behind a host reverse proxy. The server is the authority for every round: the browser only sends bets and cash-outs.

---

## Stack

| Part | Technology |
|---|---|
| Frontend | React, TypeScript, Vite, Tailwind and shadcn/ui |
| Backend | Django 5.2 on Python 3.12 with Django REST Framework |
| Realtime | Django Channels on daphne, with a Redis channel layer (WebSockets) |
| Background jobs | Celery worker and Celery beat |
| Data | PostgreSQL 16 and Redis 7 (Redis holds no durable state) |
| Chain | Bitcoin Core in regtest mode, reachable only inside the stack |
| Sign-in | 4zam (OpenID Connect) and one-click guests |
| Web | Caddy serves the app and proxies the API and WebSockets. A host Caddy handles TLS. |

---

## Services

- **web:** serves the built frontend and forwards `/api` and `/ws` to the backend.
- **backend:** the Django API and WebSocket server (game updates, live bets and chat).
- **game-engine:** a single process that runs the rounds: betting window, multiplier, crash and settlement.
- **worker and beat:** Celery jobs for faucet payouts, withdrawals, deposit credits, block mining on the test network and guest cleanup.
- **fairness-sealer:** checks every 5 minutes for a committed chain whose salt block has 6 confirmations, and records the block hash once two block explorers agree on it.
- **postgres:** players, bets, rounds, the fairness chain and the money ledger.
- **redis:** the WebSocket channel layer and the Celery broker.
- **bitcoind:** the regtest Bitcoin node used by the faucet and withdrawals.
- **migrate and wallet setup:** one-shot jobs that run database migrations and prepare the node wallet on deploy.

---

## Money

- Every balance change is an entry in a ledger in PostgreSQL. Bets settle there instantly.
- Only the faucet and withdrawals touch the regtest chain. Withdrawals are queued and sent by a background job.
- Nothing in the stack has real value: FAKE is a play currency and BTC lives on a private regtest network.

---

## Rounds and fairness

- The engine only runs rounds while at least one player is connected.
- Each round's seed comes from a pre-published SHA-256 hash chain, salted with the hash of a future Bitcoin block. See [Provably fair](features.md#provably-fair).
- If no sealed chain covers the next round, the engine pauses instead of falling back to a house-picked seed.

---

## Operations

- **CI** runs on every pull request and every push to main: a secret scan, backend tests, frontend lint, tests and build, deploy script checks and an end-to-end smoke test of the full production stack (deploy, play a round, back up, restore and roll back).
- **Deploys:** a staging stack deploys on every push to the staging branch. Production deploys are started by hand.
- **Backups** of the database and the node wallet run daily, and a restore drill runs weekly.
