module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        semi: ['error', 'always'],
        // 缩进
        indent: ["error", 4, { "SwitchCase": 1 }],
        // 方法名与括号的空格
        "space-before-function-paren": 0,
        "brace-style": [2, "stroustrup"],
        // 符号在一行的开头
        "operator-linebreak": ["error", "before"],
        "no-restricted-globals": ["error", "event", "fdescribe"],
        // allow async-await
        "generator-star-spacing": "off"
    },
    overrides: [{
        files: [
            '**/__tests__/*.{j,t}s?(x)',
            '**/tests/unit/**/*.spec.{j,t}s?(x)'
        ],
        env: {
            jest: true
        }
    }]
};
