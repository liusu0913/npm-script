module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 2016,
        "sourceType": "module",
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-lonely-if': 1,
        'space-before-function-paren': [
            'error',
            {
                // 匿名函数表达式
                anonymous: 'always',
                // 命名的函数表达式
                named: 'never',
                // 异步的箭头函数表达式
                asyncArrow: 'always'
            }
        ],
        'linebreak-style': [0, 'windows'],
        'keyword-spacing': [
            'error',
            {
                after: true,
                before: true
            }
        ],
        'space-infix-ops': 1,
        // 行尾空格禁用
        'no-trailing-spaces': 1,
        'no-extra-boolean-cast': 0 //禁止不必要的bool转换
        // 'no-extra-boolean-cast': "error"
    }
};
