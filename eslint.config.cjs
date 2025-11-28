// ESLint v9 flat config (CommonJS)
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const native = require('eslint-config-universe/flat/native.js');

module.exports = [
  // Ignore generated and platform folders
  {
    ignores: [
      'node_modules/**',
      '.tamagui/**',
      'ios/**',
      'android/**',
      'web-build/**',
      'dist/**',
      'build/**',
      '.next/**',
      'apps/web/.next/**',
    ],
  },
  // Node config files
  {
    files: ['**/*.{cjs,js}', 'metro.config.js', 'babel.config.js', 'jest.config.cjs'],
    languageOptions: {
      globals: {
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
      },
      sourceType: 'script',
    },
  },
  // App sources
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { jest: 'readonly' },
    },
    plugins: { '@typescript-eslint': tseslint },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];
