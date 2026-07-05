import { defineConfig } from 'vitest/config';

/**
 * Base Vitest config shared across Odyssey packages.
 * Node environment; suitable for framework-agnostic packages (utils, cms,
 * tradetracker). React packages should use `./react.js` instead.
 * @type {import('vitest/config').UserConfig}
 */
export const baseVitestConfig = defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    include: ['src/**/*.test.{ts,tsx}'],
  },
});

export default baseVitestConfig;
