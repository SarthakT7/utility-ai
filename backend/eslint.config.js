import pluginJs from "@eslint/js";
import globals from "globals";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Include browser globals
        ...globals.node, // Include Node.js globals
      },
    },
  },
  pluginJs.configs.recommended,
];
