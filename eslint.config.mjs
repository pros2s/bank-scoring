import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import pross from 'eslint-plugin-pross-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['node_modules/*'],
  },
  ...fixupConfigRules(
    compat.extends(
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'airbnb',
      'prettier',
    ),
  ),
  {
    plugins: {
      react: fixupPluginRules(react),
      'react-hooks': fixupPluginRules(reactHooks),
      prettier,
      'pross-plugin': pross,
    },

    languageOptions: {
      globals: { ...globals.browser },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: ['react'],

          groups: ['builtin', 'external', 'internal', 'parent', 'index', 'sibling', 'object', 'type'],

          pathGroups: [
            {
              pattern: 'vite',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '../**/*.css',
              group: 'parent',
              position: 'after',
            },
            {
              pattern: './**/*.css',
              group: 'sibling',
              position: 'after',
            },
          ],

          alphabetize: {
            order: 'asc',
          },
        },
      ],

      'jsx-a11y/label-has-for': [
        'error',
        {
          required: {
            some: ['nesting', 'id'],
          },
        },
      ],

      // 'i18next/no-literal-string': [
      //   'error',
      //   {
      //     markupOnly: true,
      //     ignoreAttribute: ['data-testid', 'to', 'size', 'name', 'borderWidth'],
      //   },
      // ],

      curly: 'error',
      'import/no-extraneous-dependencies': 'off',
      'no-else-return': 2,
      'no-lonely-if': 2,

      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',

      'react/jsx-filename-extension': [
        2,
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],

      'jsx-quotes': [2, 'prefer-single'],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      'pross-plugin/path-watcher': [
        'error',
        {
          alias: '@',
        },
      ],

      'pross-plugin/public-api-imports': [
        'error',
        {
          alias: '@',
          testFilesPatterns: ['**/*.stories.*'],
          deepFilePathOptions: [
            {
              path: 'entities/links',
              deep: 3,
            },
          ],
        },
      ],

      'pross-plugin/fsd-layer-imports': [
        'error',
        {
          alias: '@',

          ignoreFilesPatterns: [
            '**/types/validation',
            '**/StoreProvider/**',
            '**/app/**',
            '@/features/ThemeSwitcher/**',
          ],
        },
      ],

      'react/no-danger': 'off',
      'no-alert': 'off',
      'no-bitwise': 'off',
      'react/no-array-index-key': 'off',
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'react/function-component-definition': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-shadow': 'off',
      'no-unused-vars': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      'object-curly-newline': 'off',
      'no-plusplus': 'off',
      'no-param-reassign': 'off',
      'no-undef': 'off',
      'no-restricted-syntax': 'off',
      'jsx-a11y/control-has-associated-label': 'off',
      camelcase: 'off',
      'jsx-a11y/no-noninteractive-tabindex': 'off',
      'no-case-declarations': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'no-continue': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'no-underscore-dangle': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
    },
  },
];
