module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'brace-style': ['warn', 'stroustrup'],
    'camelcase': ['off', { properties: 'always' }], // Handled by babel/camelcase
    'capitalized-comments': 'off',
    'comma-spacing': ['warn', { after: true, before: false }],
    'consistent-this': 'off',
    'func-names': 'error',
    'func-name-matching': 'error',
    'func-style': 'off',
    'id-blacklist': 'error',
    'init-declarations': 'off',
    'id-length': 'off',
    'id-match': [
      'error',
      // __filename, camelCase, PascalCase, CONST_VALUE, stream$, $el
      '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$',
    ],
    'linebreak-style': ['error', 'unix'],
    'line-comment-position': 'off',
    'lines-around-comment': 'off',
    'lines-around-directive': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'max-depth': ['error', 4],
    'max-lines': [
      'error',
      { max: 2500, skipBlankLines: false, skipComments: false },
    ],
    'max-lines-per-function': ['error', 150],
    'max-nested-callbacks': ['error', 7],
    'max-params': ['error', 7],
    'max-statements-per-line': ['error', { max: 1 }],
    'max-statements': ['error', 40],
    'multiline-comment-style': 'off',
    'new-cap': 'off',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'object-shorthand': ['error', 'properties'],
    'one-var': ['error', { uninitialized: 'never', initialized: 'never' }],
    'operator-assignment': 'off',
    'padding-line-between-statements': 'off',
    'prefer-destructuring': 'off',
    'prefer-object-spread': 'warn',
    'require-jsdoc': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': 'warn',
    'prettier/prettier': 'error',
  },
};
