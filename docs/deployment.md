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
`packages/*`. Turborepo remote caching can be enabled later for faster builds.

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

GitHub Actions running `pnpm lint`, `pnpm type-check` and `pnpm build` on PRs is tracked as a
Linear ticket (Infra).
