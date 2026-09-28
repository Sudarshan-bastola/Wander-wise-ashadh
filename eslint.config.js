import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "off",
      curly: "off",
      "no-console": "off",
      "no-debugger": "off",
      "prefer-const": "off",
      eqeqeq: "off",
    },
  },
];
