# Odyssey

Monorepo for Odyssey — lead-generating / affiliate-marketing travel platforms. The first app
is an independent Dutch-language travel guide for Albania, monetized through TradeTracker
affiliate links. Built to scale to multiple countries.

> New here? Read [`AGENTS.md`](./AGENTS.md) for the full project context, then the docs below.

## Docs

- [Product vision](./docs/product-vision.md)
- [Architecture](./docs/architecture.md)
- [Design system](./docs/design-system.md)
- [Roadmap](./docs/roadmap.md)

## Tech stack

Turborepo · pnpm · TypeScript · Next.js 16 (App Router) · Tailwind CSS v4 + shadcn/ui ·
Sanity · TradeTracker XML feeds · Vercel · GitHub · Linear.

## Structure

```
apps/albanie          Next.js 16 app (first market)
packages/ui           Shared components + design tokens (Tailwind v4)
packages/cms          Sanity client, GROQ, schemas, `market` convention
packages/tradetracker TradeTracker feed fetch/parse/normalize
packages/utils        Framework-agnostic helpers
packages/config       Shared tsconfig + ESLint
docs/                 Vision, architecture, design system, roadmap, design reference
```

## Getting started

```bash
pnpm install
cp apps/albanie/.env.example apps/albanie/.env.local   # fill in values
pnpm dev
```

## Scripts

| Command           | Description             |
| ----------------- | ----------------------- |
| `pnpm dev`        | Run dev servers (Turbo) |
| `pnpm build`      | Build all packages/apps |
| `pnpm lint`       | Lint everything         |
| `pnpm type-check` | Type-check everything   |
| `pnpm format`     | Format with Prettier    |

## Requirements

Node `>=24` (see `.nvmrc`) and pnpm `>=10`.
