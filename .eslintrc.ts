/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["universe/native", "universe/shared/typescript-analysis"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  plugins: ["sort-destructure-keys", "sort-keys-fix", "import-helpers"],
  root: true,
  rules: {
    "import-helpers/order-imports": [
      "warn",
      {
        alphabetize: {
          ignoreCase: true,
          order: "asc",
        },
        groups: [
          "/^(react|expo)/",
          "module",
          "/^(@/)/",
          ["parent", "sibling", "index"],
        ],
        newlinesBetween: "always",
      },
    ],
    "import/order": "off",
    "no-undef": "off",
    "object-shorthand": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react/display-name": "off",
    "react/jsx-curly-brace-presence": ["warn", "never"],
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        multiline: "last",
        shorthandFirst: true,
      },
    ],
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "sort-destructure-keys/sort-destructure-keys": [
      "warn",
      {
        caseSensitive: true,
      },
    ],
    "sort-keys-fix/sort-keys-fix": "warn",
  },
};

module.exports = config;
