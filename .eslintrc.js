// This file extends base eslint configuration from create-react-app

const defaultRules = [
  // any other plugins or custom configuration we would like to extend from.
];

module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended", "prettier"],
  parser: "babel-eslint",
  parserOptions: { sourceType: "module" },
  rules: {
    "no-use-before-define": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    quotes: [2, "double", { avoidEscape: true }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
  },
  overrides: [
    //All extra typescript rules in this section
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: ["@typescript-eslint"],
      extends: [
        ...defaultRules,
        "plugin:@typescript-eslint/recommended",
        // any other TypeScript specific config (from a plugin, or custom)
      ],
      rules: {
        //These some examples of what we could have, this can be changed
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-expressions": "warn",
      },
    },
  ],
  settings: {
    react: {
      // React version. "detect" automatically picks the version you have installed.
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
