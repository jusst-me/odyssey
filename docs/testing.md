# Testing Strategy

High quality is a hard requirement for Odyssey, so we test where it adds value. This document
explains **which tools we use, why, and what we test**. The enforceable conventions live in
[`.cursor/rules/testing.mdc`](../.cursor/rules/testing.mdc).

## Philosophy

- Test **behaviour, not implementation** — a test should survive a refactor that keeps the
  observable behaviour the same.
- Prefer a **small number of meaningful tests** over a coverage percentage. No hard coverage
  gate initially; we require tests for new shared logic and for every bug fix.
- Tests are part of the Definition of Done and (once husky lands) run automatically on commit.

## The stack

| Layer                 | Tool                                                        | Why |
| --------------------- | ----------------------------------------------------------- | --- |
| Unit & integration    | **Vitest**                                                  | ESM/TypeScript-native, very fast, Jest-compatible API, first-class support in a Vite/Turborepo/pnpm monorepo with shared config. |
| Component             | **React Testing Library** + `@testing-library/user-event` on **jsdom** | Encourages accessible, behaviour-driven tests (query by role/label). |
| Accessibility (unit)  | **vitest-axe**                                              | Automated WCAG checks inside component tests; complements manual keyboard/contrast review. |
| End-to-end            | **Playwright** + `@axe-core/playwright`                     | Real routing, RSC rendering, cross-browser, keyboard flows, page-level a11y scans. |

### Why Vitest over Jest

Next.js 16 + ESM + TypeScript makes Jest configuration painful; Vitest is faster, needs almost
no config, and shares a single config style across every workspace package.

### Why Playwright over Cypress

Better parallelism, native multi-browser support, first-class network/RSC handling, and a
maintained axe integration for accessibility scans.

## What we test (by priority)

1. **Pure logic — always.** The highest-ROI target:
   - `packages/utils` — formatting, slugify, etc.
   - `packages/tradetracker` — feed parsing & normalization, including **malformed/edge-case
     XML** (this is where real bugs hide).
   - `packages/cms` — GROQ query building and `market` filtering.
2. **Shared UI** in `packages/ui` — behaviour + a keyboard-interaction test + a `vitest-axe`
   assertion per component.
3. **Critical app flows** — a handful of Playwright smoke tests per app (page renders, primary
   nav, key CTA, offer listing). We do not E2E every page.

## Conventions (summary)

- Co-locate unit/component tests as `*.test.ts(x)` next to the source; Playwright specs live in
  `apps/<app>/e2e/*.spec.ts`.
- Query by accessible role/label/text; avoid `data-testid` unless unavoidable.
- Don't over-mock async Server Components — extract logic into pure functions (unit-tested) and
  cover the rendered output with Playwright.
- Mock network/feeds at the boundary; never hit live TradeTracker/Sanity from unit tests. Use
  fixtures for feed XML and GROQ responses.
- Every bug fix ships with a regression test that fails before the fix.

## Commands

```bash
pnpm test          # unit/component tests (turbo → vitest)
pnpm test:e2e      # Playwright E2E per app
```

## Setup

The tooling is wired up (JUS-51):

- Shared Vitest presets live in `@odyssey/config/vitest/base` (Node) and
  `@odyssey/config/vitest/react` (jsdom + Testing Library + jest-dom + vitest-axe matchers).
- A package opts in by adding a `vitest.config.ts` that re-exports the relevant preset and a
  `"test": "vitest run"` script. Currently wired: `@odyssey/utils` (base) and `@odyssey/ui`
  (react). Add the same for `cms`/`tradetracker` once they have real logic.
- React packages that assert accessibility add a `src/vitest.d.ts` referencing the matcher
  types (see `packages/ui/src/vitest.d.ts`).
- E2E lives in `apps/<app>/e2e/*.spec.ts` with a `playwright.config.ts` and a
  `"test:e2e": "playwright test"` script. Run `pnpm exec playwright install chromium` once to
  fetch the browser. The config boots `next dev` automatically.

> Note: `vitest-axe` cannot check colour contrast under jsdom (no real layout), so component
> tests catch structural/ARIA issues while **Playwright + @axe-core/playwright** performs the
> full WCAG scan (contrast included) against the running app.

The **husky pre-commit hook** (JUS-52) is still to be implemented.
