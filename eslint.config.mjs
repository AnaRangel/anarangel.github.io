import parser from "astro-eslint-parser";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/astro.config.ts",
        "**/commitlint.config.mjs",
        "**/.eslintrc.cjs",
        "**/lint-staged.config.mjs",
        "**/postcss.config.mjs",
        "**/prettier.config.mjs",
        "src/env.d.ts",
        "**/stylelint.config.mjs",
        "**/node_modules",
        "**/.pnpm",
        "**/public",
        "**/dist",
        "**/.vercel",
        "**/.husky",
        "**/.vscode",
        "**/.astro",
    ],
}, ...compat.extends("plugin:astro/recommended", "prettier"), {
    files: ["**/*.astro"],

    languageOptions: {
        parser: parser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            parser: "@typescript-eslint/parser",
            extraFileExtensions: [".astro"],
        },
    },

    rules: {},
}, ...compat.extends("plugin:@typescript-eslint/recommended").map(config => ({
    ...config,
    files: ["**/*.ts", "**/*.tsx"],
})), {
    files: ["**/*.ts", "**/*.tsx"],

    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",
    },

    rules: {},
}];