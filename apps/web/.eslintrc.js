/**
 * @type {import('@types/eslint').Linter.Config}
 */
const eslintRC = {
  extends: ['next/core-web-vitals', require.resolve('@brunowego/presets/eslint')],
}

module.exports = eslintRC
