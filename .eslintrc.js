module.exports = {
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.tsx'],
      extends: ['plugin:react/recommended'],
      plugins: ['react', 'react-hooks', 'jsx-a11y'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/label-has-associated-control': 'warn',
        'jsx-a11y/mouse-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/forbid-prop-types': 'off',
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-curly-brace-presence': 'error',
        'react/jsx-filename-extension': 'off',
        'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
        'react/jsx-key': 'error',
        'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
        'react/jsx-no-undef': [2, { allowGlobals: true }],
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-sort-props': ['error', { ignoreCase: true }],
        'react/no-array-index-key': 'warn',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'off',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-stateless-function': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/self-closing-comp': 'error',
        'react/sort-comp': 'off',
        'react/sort-prop-types': 'error',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: [__dirname],
      },
    },
  },
}
