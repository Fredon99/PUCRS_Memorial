import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginJs.configs.recommended,
    {
        rules: {
            "semi": ["error", "always"], // Enforce semicolons
            "quotes": ["error", "double"], // Use double quotes
            "indent": ["error", 4], // Enforce 2-space indentation
            "no-unused-vars": "warn", // Warn about unused variables
        }
    }
];