import globals from 'globals';
import { reactLibraryConfig } from './react-library.js';

/**
 * Shared ESLint flat config for Next.js applications.
 * Note: apps also extend `next/core-web-vitals` via their own eslint config
 * where the Next.js plugin is installed as an app dependency.
 * @type {import('eslint').Linter.Config[]}
 */
export const nextConfig = [
  ...reactLibraryConfig,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
];

export default nextConfig;
