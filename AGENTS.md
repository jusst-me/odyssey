# AGENTS.md — Odyssey

Authoritative context for AI agents and developers working in this repository. Read this
first. When something here conflicts with a stray comment or the design reference, this file
(and the rules in `.cursor/rules/`) win.

## What Odyssey is

Odyssey is a monorepo for **lead-generating / affiliate-marketing travel platforms**. The
business earns commission through **TradeTracker** affiliate links by presenting curated
travel offers and high-quality editorial travel content.

- The first app is **`albanie`** — a Dutch-language travel guide for Albania, backed by a
  large organic Instagram audience (`@albanie_reizen`).
- The architecture is deliberately **multi-market**: if Albania succeeds, we add more
  countries as additional apps that share the same UI, CMS and feed tooling.
- Marketing/social is owned by a domain expert (co-founder); this repo is the **product /
  engineering** side.

## Vision & quality bar

- **Reusability first.** Anything usable by more than one app belongs in a shared `packages/*`
  package, not copied into an app. Think "platform", not "one website".
- **High quality.** Strict TypeScript, no `any` escape hatches, sensible performance defaults
  (RSC, caching/ISR). This is a real business, not a prototype.
- **Tested where it adds value.** Pure logic (utils, feed parsing, CMS queries) is unit-tested;
  shared UI has behaviour + a11y tests; critical flows have E2E smoke tests. Vitest + React
  Testing Library + Playwright + axe. See `.cursor/rules/testing.mdc` and `docs/testing.md`.
- **Accessible (WCAG 2.2 AA).** Accessibility is a hard requirement: AA colour contrast, full
  keyboard operability and visible focus states on all UI. See `.cursor/rules/accessibility.mdc`.
- **AI-friendly.** Keep this file and `docs/` accurate. Prefer clear structure and small,
  well-typed modules so future agents have unambiguous context.

## Tech stack

- **Monorepo:** Turborepo + pnpm workspaces
- **Language:** TypeScript (strict)
- **Framework:** Next.js 16 (App Router, React Server Components)
- **Styling:** Tailwind CSS v4 (CSS-first `@theme`) + shadcn/ui, tokens in `packages/ui`
- **CMS:** Sanity — one shared project/dataset, content scoped per `market`
- **Affiliate data:** TradeTracker XML product feeds (server-side fetch + ISR now; DB sync later)
- **Testing:** Vitest + React Testing Library (jsdom) · Playwright for E2E · axe for a11y
- **Hosting:** Vercel · **VCS:** GitHub · **Project management:** Linear

## Repository layout

```
odyssey/
├─ apps/
│  └─ albanie/            # Next.js 16 app (first market)
├─ packages/
│  ├─ ui/                 # Shared React components, Tailwind theme + design tokens
│  ├─ cms/                # Sanity client, GROQ helpers, schemas, `market` convention
│  ├─ tradetracker/       # Feed fetching / parsing / normalization
│  ├─ utils/              # Framework-agnostic shared helpers
│  └─ config/             # Shared tsconfig + ESLint (+ Prettier at root)
├─ docs/                  # Vision, architecture, design system, roadmap, design reference
└─ .cursor/rules/         # Agent rules (conventions enforced across the repo)
```

## Conventions (summary — see `.cursor/rules/` for detail)

- **Packages** are named `@odyssey/*` and imported via workspace aliases; never use deep
  relative imports across package boundaries.
- **UI**: reference semantic Tailwind utilities (`bg-background`, `text-primary`, ...), never
  hard-coded hex. Shared components live in `@odyssey/ui`.
- **CMS**: every market-scoped document includes the `market` field; every content query
  filters on `market`.
- **Design**: `docs/design-reference/` is loose inspiration only — not authoritative. The
  real design system is `docs/design-system.md` + `packages/ui`.
- **Linear**: used company-wide (not just dev). Every ticket is categorized (team + `Type` +
  `Area/Department` labels); development tickets are assigned to Justin. See
  `.cursor/rules/linear.mdc`.
- **Git**: every commit (agents included) follows [Conventional Commits](https://www.conventionalcommits.org)
  (`feat:`, `fix:`, `chore:`, `docs:`, ...). Branches use `feature/<linear-code>-<desc>` (only
  `feature` or `hotfix` prefixes), e.g. `feature/jus-51-testing-tooling`. Husky hooks enforce
  this (commitlint) and run lint/type-check/test on commit. See `.cursor/rules/git-github.mdc`.

## Common commands

```bash
pnpm install          # install all workspaces
pnpm dev              # run all dev servers (turbo)
pnpm build            # build everything (turbo)
pnpm lint             # lint all packages
pnpm type-check       # type-check all packages
pnpm test             # run unit/component tests (turbo → vitest)
pnpm test:e2e         # run Playwright E2E (per app)
pnpm format           # prettier write
```

## Definition of Done

- Type-checks (`pnpm type-check`) and lint (`pnpm lint`) pass.
- Tests pass; new shared logic and bug fixes ship with tests (`.cursor/rules/testing.mdc`).
- New shared behaviour lives in the right `packages/*` package.
- No hard-coded colours/spacing; uses design tokens.
- Accessible: WCAG 2.2 AA contrast, keyboard-operable with visible focus, semantic markup.
- Env vars documented in the relevant `.env.example`.
- Corresponding Linear ticket updated.
