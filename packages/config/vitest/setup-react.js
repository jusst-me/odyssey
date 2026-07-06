// Registers jest-dom matchers (toBeInTheDocument, ...) with Vitest's expect.
import '@testing-library/jest-dom/vitest';
// Registers the vitest-axe accessibility matcher (toHaveNoViolations).
import * as axeMatchers from 'vitest-axe/matchers';
import { expect } from 'vitest';

expect.extend(axeMatchers);

// jsdom stubs — APIs that JSDOM doesn't implement but Radix primitives require.
if (typeof globalThis.ResizeObserver === 'undefined') {
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}
