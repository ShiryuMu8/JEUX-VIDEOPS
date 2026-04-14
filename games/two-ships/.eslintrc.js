module.exports = {
  root: true, // empêche ESLint de remonter chercher d'autres configs
  extends: ['google'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module', // indique que le code utilise les import/export
  },
};