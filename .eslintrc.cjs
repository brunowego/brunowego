/**
 * @type {import('@types/eslint').Linter.Config}
 */
const eslintRC = {
  extends: ['./packages/brunowego-presets/eslint'],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
}

module.exports = eslintRC
