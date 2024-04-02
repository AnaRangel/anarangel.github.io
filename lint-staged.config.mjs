export default {
  'src/**/*.{js,ts,jsx,tsx,astro}': ['astro check', 'prettier --write', 'eslint --fix'],
  'src/**/*.{scss,css,sass,astro}': ['stylelint --fix'],
};

/**
 * @reference
 * https://github.com/Zyruks/astro-starter/blob/main/docs/code-quality-tools/lintstaged.md
 */
