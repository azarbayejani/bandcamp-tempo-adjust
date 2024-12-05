export default [
  {
    extends: 'react-app',
    globals: {
      browser: 'readonly',
    },
    files: ['packages/**/*.{ts,tsx}', 'app/**/*.{ts,tsx}'],
  },
];
