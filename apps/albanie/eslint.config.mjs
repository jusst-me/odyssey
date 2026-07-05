import nextPlugin from '@next/eslint-plugin-next';
import { nextConfig as base } from '@odyssey/config/eslint/next';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...base,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    ignores: ['.next/**'],
  },
];
