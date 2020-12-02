module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],
    parserOptions: {
        parser: "babel-eslint"
    },
    plugins: [
        "vue"
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        indent: "off",
        "vue/html-indent": [
            "error",
            4,
            {
                attribute: 1,
                baseIndent: 1,
                ignores: []
            }
        ],
        "vue/max-attributes-per-line": [
            "error",
            {
                singleline: 1
            }
        ],
        "no-unused-vars": "off",
        "vue/no-multiple-template-root": "off",
        "vue/require-default-prop": "off",
        "vue/singleline-html-element-content-newline": "off",
        "vue/html-closing-bracket-newline": "off",
        "vue/html-closing-bracket-spacing": "off",
        "vue/script-indent": [
            "error",
            4,
            {
                baseIndent: 1
            }
        ],
        semi: ["error", "always"],
        eqeqeq: "off",
        curly: "error",
        quotes: ["error", "double"],
        "comma-style": ["error", "last"]
    }
};
