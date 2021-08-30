module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    globals: {
        ga: true,
        chrome: true
    },
    plugins: ["vue"],
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 6,
        parser: "babel-eslint",
        ecmaFeatures: {
            jsx: true
        },
        sourceType: "module"
    },
    rules: {
        "no-restricted-globals": ["error", "event", "fdescribe"],
        // allow async-await
        "generator-star-spacing": "off",
        //语句强制分号结尾
        semi: [2, "always"],
        // 缩进
        indent: ["error", 4, { "SwitchCase": 1 }],
        // 方法名与括号的空格
        "space-before-function-paren": 0,
        "brace-style": [2, "stroustrup"],
        // 符号在一行的开头
        "operator-linebreak": ["error", "before"]
    }
}
