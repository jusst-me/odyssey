/// <reference types="vitest/globals" />
/* eslint-disable @typescript-eslint/no-empty-object-type -- interface merging for matcher augmentation is intentionally "empty". */

// jest-dom matchers (toBeInTheDocument, toHaveClass, toHaveFocus, ...).
import '@testing-library/jest-dom/vitest';
import type { AxeMatchers } from 'vitest-axe';

// vitest-axe ships its type augmentation against the legacy `Vi` namespace;
// declare it against the `vitest` module so it applies under Vitest v4.
declare module 'vitest' {
  interface Assertion extends AxeMatchers {}
  interface AsymmetricMatchersContaining extends AxeMatchers {}
}
