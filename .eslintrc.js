module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: 'standard',
  env: {
    es6: true,
    browser: true
  },
  plugins: ['html'],
  rules: {
    'no-new': 0,
    'space-before-function-paren': 0
  }
}
