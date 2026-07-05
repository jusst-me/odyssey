import { fileURLToPath } from 'node:url';
import { defineConfig, mergeConfig } from 'vitest/config';
import { baseVitestConfig } from './base.js';

const setupFile = fileURLToPath(new URL('./setup-react.js', import.meta.url));

/**
 * Vitest config for React component packages: jsdom environment, Testing
 * Library + jest-dom matchers and vitest-axe accessibility matchers wired up
 * via the shared setup file.
 * @type {import('vitest/config').UserConfig}
 */
export const reactVitestConfig = mergeConfig(
  baseVitestConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      setupFiles: [setupFile],
    },
    // React 19 automatic JSX runtime so TSX transforms without a plugin.
    esbuild: { jsx: 'automatic', jsxImportSource: 'react' },
  }),
);

export default reactVitestConfig;
