module.exports = {
    root: true,

    extends: [
        'airbnb-base'
    ],

    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module'
    },

    env: {
        browser: true,
        node: true
    },

    globals: {

    },

    rules: {
        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            // MemberExpression: null,
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            },
            CallExpression: {
                arguments: 1
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            ignoreComments: false
        }],

        'no-underscore-dangle': 'off',

        'class-methods-use-this': 'off',

        'import/prefer-default-export': 'off',

        'max-len': ['error', 120, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],

        'no-param-reassign': 'off',
        'arrow-parens': ['error', 'as-needed'],

        'linebreak-style': ['error', 'windows'],

        'operator-linebreak': ['error', 'after'],
    }
};
