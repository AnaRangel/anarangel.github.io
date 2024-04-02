/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-html/astro'],
  plugins: [
    'stylelint-order',
    'stylelint-config-rational-order-fix/plugin',
    'stylelint-color-format',
    'stylelint-group-selectors',
    'stylelint-suitcss',
    'stylelint-high-performance-animation',
    'stylelint-rem-over-px',
    'stylelint-use-logical-spec',
  ],
  rules: {
    'rem-over-px/rem-over-px': true,
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'named-grid-areas-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-no-unknown': null,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'custom-property-no-missing-var-function': true,
    'property-no-unknown': true,
    'keyframe-declaration-no-important': true,
    'keyframe-block-no-duplicate-selectors': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'block-no-empty': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'media-feature-name-no-unknown': true,
    'at-rule-no-unknown': null,
    'comment-no-empty': true,
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,
    'alpha-value-notation': [
      'percentage',
      {
        exceptProperties: ['opacity'],
      },
    ],
    'hue-degree-notation': 'angle',
    'color-function-notation': 'modern',
    'color-hex-alpha': 'never',
    'color-hex-length': 'long',
    'color-named': 'never',
    'color-no-hex': true,
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': 'numeric',
    'function-disallowed-list': [''],
    'function-url-no-scheme-relative': true,
    'function-url-quotes': [
      'always',
      {
        except: ['empty'],
      },
    ],
    'function-url-scheme-disallowed-list': ['ftp'],
    'keyframes-name-pattern': 'anime-.+',
    'number-max-precision': 4,
    'time-min-milliseconds': [
      100,
      {
        ignore: ['delay'],
      },
    ],
    'unit-disallowed-list': [
      ['px'],
      {
        ignoreProperties: {
          px: ['font-size', '/^border/'],
          vmin: 'width',
        },
      },
    ],
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'declaration-no-important': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-block-single-line-max-declarations': 1,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': '[a-z]+',
    'selector-max-attribute': 4,
    'selector-max-class': 3,
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-max-pseudo-class': 3,
    'selector-max-specificity': '1,4,0',
    'selector-max-type': 2,
    'selector-max-universal': 1,
    'selector-nested-pattern': null,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute'],
      },
    ],
    'selector-no-vendor-prefix': true,
    'selector-not-notation': 'complex',
    'selector-pseudo-element-colon-notation': 'double',
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-no-vendor-prefix': true,
    'max-nesting-depth': [
      3,
      {
        ignore: ['blockless-at-rules'],
      },
    ],
    'no-irregular-whitespace': true,
    'no-unknown-animations': true,
    'scss/dollar-variable-pattern': [
      '',
      {
        ignore: ['local', 'global'],
      },
    ],
    'scss/double-slash-comment-empty-line-before': 'always',
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/comment-no-empty': true,
    'scss/at-rule-conditional-no-parentheses': null,
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-comment', 'after-dollar-variable'],
      },
    ],
    'scss/at-if-no-null': null,
    'scss/no-duplicate-dollar-variables': [
      true,
      {
        ignoreInsideAtRules: ['if', 'mixin'],
        ignoreInside: ['nested-at-rule', 'at-rule'],
      },
    ],
    'declaration-empty-line-before': null,
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': true,
        'empty-line-between-groups': true,
      },
    ],
    'color-format/format': {
      format: 'hsla',
    },
    'plugin/stylelint-group-selectors': true,
    'suitcss/root-no-standard-properties': true,
    'suitcss/selector-root-no-composition': true,
    'liberty/use-logical-spec': 'always',
    'plugin/no-low-performance-animation-properties': [
      true,
      {
        ignoreProperties: ['color', 'background-color'],
      },
    ],
  },
};
/**
 * @reference
 * https://github.com/Zyruks/astro-starter/blob/main/docs/code-quality-tools/stylelint.md
 */
