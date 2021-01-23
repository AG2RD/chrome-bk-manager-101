module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['*.d.ts', '*.js', 'coverage', 'dist', 'node_modules', '*test-setup.ts'],
  plugins: ['@typescript-eslint', 'angular'],
  rules: {},
};
