const lintStagedRC = {
  '*.{mjs,ts,tsx}': 'eslint --fix --max-warnings 0',
  '*.{css,json,md,mjs,tsx}': 'prettier --write',
}

export default lintStagedRC
