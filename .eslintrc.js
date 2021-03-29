// This file extends base eslint configuration from create-react-app

const defaultRules = [
  // any other plugins or custom configuration we would like to extend from.
];

module.exports = {
  extends: ["eslint-config-react-app"],
  rules: {
    'array-callback-return': 'warn',
    'consistent-return': 'warn',
    'default-case': 'warn',
    // etc.
  },
  overrides: [ //All extra typescript rules in this section
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: [
        ...defaultRules,
        'plugin:@typescript-eslint/recommended',
        // any other TypeScript specific config (from a plugin, or custom)
      ],
      rules: { //These some examples of what we could have, this can be changed
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-expressions': 'warn',
      },
    },
  ],
  settings: {
    react: {
      // React version. "detect" automatically picks the version you have installed.
      version: 'detect',
    },
  },
};
