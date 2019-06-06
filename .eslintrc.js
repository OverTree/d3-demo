module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/prettier'
  ],
  "rules": {
    "no-console": "off",
    "no-debugger": "off",
    "vue/html-indent": "warning",
    "vue/no-unused-components": 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}