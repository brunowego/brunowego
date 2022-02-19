/**
 * @type {import('@types/eslint').Linter.Config}
 */
const eslintRC = {
  extends: ['./eslint'],
  env: {
    node: true,
  },
}

module.exports = eslintRC
