module.exports = {
  root: true,
  extends: [
    'universe/native',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  env: { jest: true },
  ignorePatterns: ['node_modules/', 'dist/', 'build/'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  settings: {
    react: { version: 'detect' },
  },
};
