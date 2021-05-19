// This file extends base eslint configuration from create-react-app

const defaultRules = [
  // any other plugins or custom configuration we would like to extend from.
];

module.exports = {
  extends: ['eslint-config-react-app'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    'array-callback-return': 'warn',
    'consistent-return': 'warn',
    'default-case': 'warn',
  },
  overrides: [
    //All extra typescript rules in this section
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: [
        ...defaultRules,
        'plugin:@typescript-eslint/recommended',
        // any other TypeScript specific config (from a plugin, or custom)
      ],
      rules: {
        //These some examples of what we could have, this can be changed
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'error',
      },
    },
  ],
  settings: {
    react: {
      // React version. "detect" automatically picks the version you have installed.
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
