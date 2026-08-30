import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import pnpm from 'eslint-plugin-pnpm';
import globals from 'globals';
import * as jsoncParser from 'jsonc-eslint-parser';
import * as yamlParser from 'yaml-eslint-parser';

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/',
      '**/.output/',
      '**/.wxt/',
      '**/dist/',
      '**/playwright-report/',
      '**/test-results/',
      '**/e2e/har/',
      'safari/',
      'safari-bak/',
      'profiles/',
      'docs/',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  jsxA11y.flatConfigs.recommended,
  reactHooks.configs.flat.recommended,
  {
    settings: {
      react: { version: 'detect' },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        chrome: 'readonly',
      },
    },
    rules: {
      // matches the old react-app config, which ignored _-prefixed args
      // and didn't flag caught errors or the any type
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', caughtErrors: 'none' },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    // Playwright fixtures use empty destructuring patterns and a `use`
    // callback that the React hooks rule mistakes for the use() hook
    files: ['**/e2e/**'],
    rules: {
      'no-empty-pattern': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
  },
  {
    files: ['**/*.spec.{ts,tsx,js}', 'test_setup.ts'],
    languageOptions: {
      globals: {
        ...globals.vitest,
      },
    },
  },
  {
    // Catalog hygiene; json-enforce-catalog is deliberately off — only
    // deps shared by two or more packages go in the catalog
    files: ['package.json', '**/package.json'],
    languageOptions: { parser: jsoncParser },
    plugins: { pnpm },
    rules: {
      // report-only: with its default autofix/autoInsert, a lint run
      // (even without --fix) writes missing entries into
      // pnpm-workspace.yaml as `^0.0.0` instead of failing
      'pnpm/json-valid-catalog': [
        'error',
        { autofix: false, autoInsert: false },
      ],
    },
  },
  {
    files: ['pnpm-workspace.yaml'],
    languageOptions: { parser: yamlParser },
    plugins: { pnpm },
    rules: {
      'pnpm/yaml-no-unused-catalog-item': 'error',
      'pnpm/yaml-no-duplicate-catalog-item': 'error',
    },
  }
);
