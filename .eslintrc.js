module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier',
    '@vue/prettier',
  ],
  plugins: ['vue', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': 'off',
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'warn',
    'no-unused-vars': 'warn',
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    indent: 'off',
    'prettier/prettier': 'error',
  },
};
