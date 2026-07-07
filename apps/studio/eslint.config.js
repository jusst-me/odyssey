import { baseConfig } from '@odyssey/config/eslint/base';

/** @type {import('eslint').Linter.Config[]} */
export default [{ ignores: ['.sanity/**'] }, ...baseConfig];
