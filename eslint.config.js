import { FlatCompat } from "@eslint/eslintrc";
import * as path from "path";
import * as tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser"; // ✅ Fix: use this
// @ts-ignore
import drizzle from "eslint-plugin-drizzle";

const compat = new FlatCompat({
  baseDirectory: path.resolve(),
});

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...compat.extends("next/core-web-vitals"),

  {
    ignores: [".next", "dist", ".turbo"],
  },

  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser, // ✅ Use direct parser import
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: path.resolve(),
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      drizzle,
    },
    rules: {
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      "drizzle/enforce-delete-with-where": [
        "error",
        { drizzleObjectName: ["db", "ctx.db"] },
      ],
      "drizzle/enforce-update-with-where": [
        "error",
        { drizzleObjectName: ["db", "ctx.db"] },
      ],
    },
  },

  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
];
