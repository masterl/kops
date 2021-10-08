module.exports = {
    root: true,
    env:  {
        browser:  false,
        commonjs: true,
        es2021:   true,
        node:     true
    },
    extends: [
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 12
    },
    rules: {
        eqeqeq:                [
            'error',
            'smart'
        ],
        camelcase:             [
            'off',
            {
                properties: 'always'
            }
        ],
        semi:                  [
            'error',
            'always'
        ],
        curly:                 'error',
        'prefer-const':        'warn',
        'no-const-assign':     'error',
        'no-var':              'error',
        'padded-blocks':       [
            'error',
            'never'
        ],
        'operator-assignment': [
            'error',
            'always'
        ],
        'no-cond-assign':      [
            'error',
            'always'
        ],
        'key-spacing':         [
            'error',
            {
                beforeColon: false,
                afterColon:  true,
                mode:        'minimum',
                align:       'value'
            }
        ],
        'no-multi-spaces': [
            'error',
            {
                ignoreEOLComments: true,
                exceptions:        {
                    VariableDeclarator: true,
                    ImportDeclaration:  true
                }
            }
        ],
        'nonblock-statement-body-position': [
            'error',
            'below'
        ],
        'brace-style':                      [
            'error',
            'allman'
        ],
        indent:               [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'space-infix-ops':                  'error',
        'object-curly-newline':             [
            'error',
            {
                ObjectExpression:  {
                    minProperties: 1
                },
                ImportDeclaration: {
                    minProperties: 2, consistent: true
                }
            }
        ],
        'object-curly-spacing':     [
            'error',
            'always'
        ],
        'object-property-newline':  'error',
        'arrow-parens':             [
            'error',
            'as-needed'
        ],
        'array-element-newline':    [
            'error',
            'always'
        ],
        'array-bracket-newline':    [
            'error',
            {
                multiline: true, minItems: 1
            }
        ],
        'arrow-spacing':            'error',
        'function-paren-newline':   [
            'error',
            'multiline'
        ],
        'newline-per-chained-call': [
            'error',
            {
                ignoreChainWithDepth: 1
            }
        ]
    }
};
