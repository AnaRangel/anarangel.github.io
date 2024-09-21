module.exports = {
  extends: ['plugin:astro/recommended', 'prettier'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      rules: {},
    },
  ],
  ignorePatterns: [
    // Tooling configurations
    'astro.config.ts',
    'commitlint.config.mjs',
    '.eslintrc.cjs',
    'lint-staged.config.mjs',
    'postcss.config.mjs',
    'prettier.config.mjs',
    'src/env.d.ts',
    'stylelint.config.mjs',

    // Dependency directories
    'node_modules',
    '.pnpm',

    // Build and distribution directories
    'public',
    'dist',
    '.vercel',

    // Development tooling and configuration
    '.husky',
    '.vscode',
    '.astro',
  ],
};

/**
 * @reference
 * https://github.com/Zyruks/astro-starter/blob/main/docs/code-quality-tools/eslint.md
 */
