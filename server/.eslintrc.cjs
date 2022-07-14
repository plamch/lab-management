module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: { sourceType: 'module' },
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    env: {
        node: true,
    },
}
