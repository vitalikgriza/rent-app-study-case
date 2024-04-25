/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig | TailwindConfig } */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 120,
  singleQuote: true,
  arrowParens: "avoid",
  bracketSpacing: true,
  trailingComma: "all"
};

export default config;
