# Roadmap

High-level phases. Detailed, actionable work lives in Linear (project "Odyssey").

## Phase 0 — Foundation (this phase)

- [x] Turborepo + pnpm scaffold, shared tooling (tsconfig, ESLint, Prettier)
- [x] Self-designed design system (tokens, typography) in `packages/ui`
- [x] `apps/albanie` Next.js 16 skeleton
- [x] Shared package skeletons: `ui`, `cms`, `tradetracker`, `utils`
- [x] AI context (`AGENTS.md`, `docs/`) and `.cursor/rules/`
- [ ] GitHub + Vercel wiring
- [ ] Linear backlog + company-wide categorization

## Phase 1 — Albania MVP

- Design system build-out + core layout (header/nav, footer, newsletter CTA)
- Homepage sections (hero, USPs, featured categories, latest articles, featured destination)
- Sanity content models (pages, blog posts, destinations, categories, authors)
- Blog post template (TOC, typography, related posts, breadcrumbs)
- TradeTracker feed integration (fetch/parse/normalize) + offer listing components
- Affiliate link handling + disclosure, ad slots
- SEO (metadata, sitemap, schema.org)
- CI (GitHub Actions) + Vercel production deploy

## Phase 2 — Scale & maturity

- Migrate affiliate feeds to a database sync (Prisma/Postgres) for richer search/filtering
- Analytics & conversion tracking
- Signature interactive tools (e.g. trip budget calculator)

## Phase 3 — Multi-market

- Extract per-market theming, add the second country app, validate shared-package reuse
