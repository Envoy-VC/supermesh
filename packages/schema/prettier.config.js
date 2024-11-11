import commonPrettierOptions from "@openmesh/style-guide/prettier";

/** @type {import('prettier').Config} */
const config = {
  ...commonPrettierOptions,
  plugins: [
    ...commonPrettierOptions.plugins,
    "@trivago/prettier-plugin-sort-imports",
  ],
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  useTabs: false,
  singleQuote: true,
  jsxSingleQuote: true,
  endOfLine: "lf",
  printWidth: 80,
  importOrder: [
    "^~/lib/helpers/(.*)$",
    "^~/lib/data/(.*)$",
    "^~/lib/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^~/assets/(.*)$",
    "^[./]",
    "^~/types/(.*)$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

// eslint-disable-next-line import/no-default-export -- safes
export default config;
