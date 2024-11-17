import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    test: { include: ['apps/**/*.spec.{ts,js,tsx}'] },
    extends: './vitest.config.ts',
  },
  {
    test: { include: ['packages/**/*.spec.{ts,js,tsx}'] },
    extends: './vitest.config.ts',
  },
]);
