module.exports = {
  root: true,
  extends: ['google'],
  parserOptions: {
    ecmaVersion: 2020, // supporte ?. et ?? 
    sourceType: 'module',
  },
  rules: {
    'no-var': 'off',
    'prefer-const': 'off',
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    'max-len': 'off',
    'no-unused-vars': 'warn',
    'indent': 'off',
    'object-curly-spacing': 'off',
    'space-before-function-paren': 'off',
    'camelcase': 'off',
  },
};