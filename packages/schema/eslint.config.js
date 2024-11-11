import browserConfig from "@supermesh/style-guide/eslint/browser";
import nodeConfig from "@supermesh/style-guide/eslint/node";
import typescriptConfig from "@supermesh/style-guide/eslint/typescript";
import { configs } from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
// eslint-disable-next-line import/no-default-export -- safe
export default [
  ...nodeConfig,
  ...typescriptConfig,
  ...browserConfig,
  ...configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      "no-console": ["off"],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-confusing-void-expression": [
        "error",
        { ignoreArrowShorthand: true },
      ],
      "@typescript-eslint/no-shadow": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      "@typescript-eslint/restrict-template-expressions": ["warn"],
      "import/order": [
        "off",
        {
          "newlines-between": "ignore",
          alphabetize: { order: "asc" },
        },
      ],
    },
  },
];
