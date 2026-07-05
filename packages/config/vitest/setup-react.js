// Registers jest-dom matchers (toBeInTheDocument, ...) with Vitest's expect.
import '@testing-library/jest-dom/vitest';
// Registers the vitest-axe accessibility matcher (toHaveNoViolations).
import * as axeMatchers from 'vitest-axe/matchers';
import { expect } from 'vitest';

expect.extend(axeMatchers);
