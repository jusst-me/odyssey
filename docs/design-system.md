# Odyssey Design System

This document defines the Odyssey design system from first principles. It is **not**
derived from the `docs/design-reference/` prototype (that prototype is loose inspiration
only and is not authoritative).

The tokens defined here are implemented in [`packages/ui/src/styles/theme.css`](../packages/ui/src/styles/theme.css)
using Tailwind CSS v4's CSS-first `@theme` configuration, and are consumed by all apps.

## Design principles

1. **Editorial & trustworthy** — the platform is an independent travel guide that earns
   through affiliate links. The visual language should feel like quality journalism, not a
   discount aggregator: generous whitespace, confident typography, restrained colour.
2. **Warm Mediterranean palette** — inspired by Adriatic water, coastal light and sun-baked
   earth, without copying any single reference. Primary evokes clear sea; the accent evokes
   warm sun/terracotta and is reserved for calls to action.
3. **Multi-market theming** — Odyssey will expand to multiple countries/brands. Tokens are
   split into two layers so a future app can re-theme by overriding a small set of semantic
   variables:
   - **Primitive tokens** — raw colour scales (`--brand-500`, `--neutral-200`, ...). Stable.
   - **Semantic tokens** — role-based variables (`--background`, `--primary`, ...) that map
     to primitives. A market overrides these, never the primitives.
4. **Accessible by default** — colour pairings target WCAG AA for body text; interactive
   states have visible focus rings.
5. **shadcn/ui compatible** — semantic variables follow the shadcn naming convention so
   shadcn components work without modification.

## Colour

### Brand — "Adria" (sea teal)

Primary brand colour. Calm, coastal, trustworthy. Used for links, primary surfaces and
brand moments. Scale `50 -> 950`.

| Token         | Hex       |
| ------------- | --------- |
| `--brand-50`  | `#eff9fb` |
| `--brand-100` | `#d7f0f4` |
| `--brand-200` | `#b3e2ea` |
| `--brand-300` | `#7fccd9` |
| `--brand-400` | `#45aec1` |
| `--brand-500` | `#2892a7` |
| `--brand-600` | `#22758c` |
| `--brand-700` | `#215e72` |
| `--brand-800` | `#234e5e` |
| `--brand-900` | `#214250` |
| `--brand-950` | `#102b36` |

### Accent — "Sun" (warm amber/terracotta)

Reserved for primary CTAs and highlights. High energy; use sparingly so it stays meaningful.

| Token          | Hex       |
| -------------- | --------- |
| `--accent-50`  | `#fef6ee` |
| `--accent-100` | `#fce9d5` |
| `--accent-200` | `#f8cfa8` |
| `--accent-300` | `#f3ae70` |
| `--accent-400` | `#ee8a45` |
| `--accent-500` | `#e86f2a` |
| `--accent-600` | `#d5551f` |
| `--accent-700` | `#b13f1c` |
| `--accent-800` | `#8d331e` |
| `--accent-900` | `#722c1c` |
| `--accent-950` | `#3d140c` |

### Neutral — "Stone" (warm-tinted grey)

Text, borders, surfaces. Slightly warm to complement the palette.

| Token           | Hex       |
| --------------- | --------- |
| `--neutral-50`  | `#f8f7f5` |
| `--neutral-100` | `#edeae6` |
| `--neutral-200` | `#dbd6cf` |
| `--neutral-300` | `#c2bbb0` |
| `--neutral-400` | `#a49b8c` |
| `--neutral-500` | `#857c6e` |
| `--neutral-600` | `#6b6357` |
| `--neutral-700` | `#565046` |
| `--neutral-800` | `#3b372f` |
| `--neutral-900` | `#262320` |
| `--neutral-950` | `#171512` |

### Semantic status

| Role    | Hex       |
| ------- | --------- |
| success | `#2f9e63` |
| warning | `#e0a52b` |
| error   | `#d23f3f` |
| info    | `#2f74d0` |

### Semantic roles (light / dark)

Role-based tokens map to the primitives above and are what components should reference
(directly or via Tailwind utilities). These are the only variables a market re-themes.

| Role                 | Light         | Dark          |
| -------------------- | ------------- | ------------- |
| `background`         | `neutral-50`  | `neutral-950` |
| `foreground`         | `neutral-900` | `neutral-50`  |
| `card`               | `#ffffff`     | `neutral-900` |
| `muted`              | `neutral-100` | `neutral-800` |
| `muted-foreground`   | `neutral-600` | `neutral-400` |
| `border`             | `neutral-200` | `neutral-800` |
| `primary`            | `brand-600`   | `brand-400`   |
| `primary-foreground` | `neutral-50`  | `neutral-950` |
| `accent`             | `accent-500`  | `accent-400`  |
| `accent-foreground`  | `neutral-950` | `neutral-950` |
| `ring`               | `brand-500`   | `brand-400`   |

## Typography

A deliberate editorial pairing, distinct from the reference prototype:

- **Display / headings — Fraunces** (variable serif). Characterful, high-contrast; gives the
  brand an editorial, magazine-like voice.
- **Body / UI — Inter** (variable sans). Highly legible at all sizes for long-form articles
  and UI chrome.
- **Mono — ui-monospace** system stack for code / technical metadata.

Loaded via `next/font/google` per app for optimal performance and no layout shift.

### Type scale (fluid where useful)

| Token         | Size                        | Use                   |
| ------------- | --------------------------- | --------------------- |
| `--text-xs`   | 0.75rem                     | captions, disclosures |
| `--text-sm`   | 0.875rem                    | metadata, labels      |
| `--text-base` | 1rem                        | body default          |
| `--text-lg`   | 1.125rem                    | lead paragraphs       |
| `--text-xl`   | 1.375rem                    | h4                    |
| `--text-2xl`  | 1.75rem                     | h3                    |
| `--text-3xl`  | clamp(2rem, 3vw, 2.5rem)    | h2                    |
| `--text-4xl`  | clamp(2.5rem, 5vw, 3.75rem) | h1 / hero             |

## Spacing, radius, elevation

- **Spacing**: Tailwind's default 4px-based scale (`0.25rem` step) is used as-is; no custom
  spacing tokens needed at this stage.
- **Radius**: `--radius-sm 0.25rem`, `--radius-md 0.5rem`, `--radius-lg 0.75rem`,
  `--radius-xl 1rem`, `--radius-full 9999px`. Base `--radius` = `0.5rem`.
- **Shadows**: subtle, warm-tinted elevation — `--shadow-sm`, `--shadow-md`, `--shadow-lg`.

## Usage guidance

- Reference **semantic** utilities (`bg-background`, `text-foreground`, `bg-primary`,
  `text-accent-foreground`, `border-border`) in components — never hard-coded hex values.
- Primitive scales (`bg-brand-500`) are available for one-off brand moments but should be
  rare in shared components.
- All shared, reusable components live in `packages/ui`. App-specific composition lives in
  the app.
