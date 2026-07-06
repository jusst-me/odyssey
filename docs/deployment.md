# Deployment

## Hosting: Vercel

Each app is its own Vercel project pointing at this monorepo. For `apps/albanie`:

| Setting          | Value                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------- |
| Framework preset | Next.js                                                                                       |
| Root Directory   | `apps/albanie`                                                                                |
| Install Command  | `pnpm install` (run at repo root — Vercel handles the workspace)                              |
| Build Command    | `pnpm turbo run build --filter=@odyssey/albanie` (or leave default; Vercel detects Turborepo) |
| Output           | `.next` (default)                                                                             |
| Node.js version  | 24.x (matches `.nvmrc`)                                                                       |

Enable **"Include files outside the Root Directory"** so Vercel can access shared
`packages/*`. See [Turborepo remote caching](#turborepo-remote-caching) for faster builds.

### Environment variables (per Vercel project)

Set these in Vercel (Production + Preview), matching `apps/albanie/.env.example`:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_API_READ_TOKEN` (server-only)
- `TRADETRACKER_FEED_URLS`
- `NEXT_PUBLIC_SITE_URL`

## Version control: GitHub

The repo is hosted on GitHub; Vercel deploys on push (production from `main`, previews from
PRs). To create and push the remote (requires the GitHub CLI `gh` or a repo URL):

```bash
# Option A — GitHub CLI
gh repo create odyssey --private --source=. --remote=origin --push

# Option B — existing empty repo
git remote add origin git@github.com:<owner>/odyssey.git
git push -u origin main
```

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs on PRs into `main` and pushes to `main`:
format check, lint, type-check, test, build and Playwright E2E. `main` should be a protected
branch requiring the CI check to pass (see `.cursor/rules/git-github.mdc`).

## Turborepo remote caching

Turborepo uses **Vercel Remote Cache** so CI and teammates reuse each other's build/test/lint
task outputs. The workflow already reads `TURBO_TOKEN` / `TURBO_TEAM`; Turbo activates the
remote cache automatically when they are present (and runs uncached otherwise — no error).

**One-time setup:**

1. Create a Vercel access token: Vercel → Account Settings → Tokens.
2. Find your Turbo team slug: for a personal account it is your Vercel username; for a team it
   is the team slug (`team_...` or the URL slug).
3. In GitHub → repo **Settings → Secrets and variables → Actions**:
   - add a **secret** `TURBO_TOKEN` = the Vercel token;
   - add a **variable** `TURBO_TEAM` = the team slug.
4. Locally, link the repo to the same remote cache (writes `.turbo/config.json`, gitignored):

   ```bash
   pnpm exec turbo login
   pnpm exec turbo link
   ```

   Or export `TURBO_TOKEN` / `TURBO_TEAM` in your shell / root `.env` (see `.env.example`).

**Optional hardening:** enable signed cache artifacts by setting `"remoteCache": { "signature":
true }` in `turbo.json` and adding a `TURBO_REMOTE_CACHE_SIGNATURE_KEY` secret/env — this makes
Turbo verify artifact integrity and reject tampered cache entries.
