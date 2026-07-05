import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
   rules: {
  /*
   * JavaScript
   */
  'no-console': ['warn', { allow: ['warn', 'error'] }],
  'no-debugger': 'error',
  'no-alert': 'error',

  'no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],

  eqeqeq: ['error', 'always'],
  curly: ['error', 'all'],

  'prefer-const': 'error',
  'no-var': 'error',

  'object-shorthand': ['error', 'always'],
  'prefer-template': 'error',

  /*
   * Imports
   */
  'import/order': [
    'error',
    {
      groups: [
        'builtin',
        'external',
        'internal',
        ['parent', 'sibling', 'index'],
      ],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],

  'import/no-duplicates': 'error',
  'import/first': 'error',
  'import/newline-after-import': ['error', { count: 1 }],

  /*
   * React
   */
  'react/react-in-jsx-scope': 'off',
  'react/jsx-uses-react': 'off',

  'react/prop-types': 'off',

  'react/self-closing-comp': 'error',

  'react/jsx-boolean-value': ['error', 'never'],

  'react/jsx-curly-brace-presence': [
    'error',
    {
      props: 'never',
      children: 'never',
    },
  ],

  'react/jsx-no-useless-fragment': 'error',

  /*
   * Hooks
   */
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
},
  },
])
