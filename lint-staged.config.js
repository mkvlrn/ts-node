module.exports = {
  '*.(ts|tsx)': [
    'eslint --fix',
    'prettier --write',
    () => 'tsc --skipLibCheck --noEmit',
    'yarn test --bail --findRelatedTests',
  ],
  '*.json': ['prettier --write'],
};
