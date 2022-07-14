module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: { sourceType: "module" },
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    env: {
        es2022: true,
        node: true,
    },
    rules: {
        eqeqeq: ["warn", "smart"],
        yoda: ["warn", "never", { exceptRange: true }],
        "object-shorthand": "warn",
        "no-useless-rename": "warn",
        "no-useless-call": "warn",
        "no-useless-concat": "warn",
        "no-console": "warn",
        "no-duplicate-imports": "warn",
        "no-param-reassign": "warn",
        "no-shadow": "warn",
        "no-unsafe-optional-chaining": [
            "warn",
            { disallowArithmeticOperators: true },
        ],
        "no-lone-blocks": "warn",
        "no-return-assign": "warn",
        "no-self-compare": "warn",
        "no-undef-init": "warn",
        "no-use-before-define": "warn",
        "no-void": "warn",
        "no-cond-assign": "error",
        "no-const-assign": "error",
        "no-func-assign": "error",
        "no-plusplus": "warn",
        "no-var": "warn",
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "prefer-arrow-callback": "warn",
        "prefer-const": "warn",
        "prefer-template": "warn",
        "prefer-object-has-own": "warn",
    },
    // TODO: husky with lint-staged
    // TODO: fix all eslint and TS errors
};