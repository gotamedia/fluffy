const config = {
    parser: "@typescript-eslint/parser",
    env: {
        "browser": true,
        "node": true,
        "es6": true
    },
    extends: [
        'eslint:recommended',
        'plugin:react-hooks/recommended'
    ],
    plugins: [
        'react',
        'react-hooks',
        "@typescript-eslint"
    ],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': ['warn', {
            'additionalHooks': '(useDeepCompareEffect|useDeepCompareCallback|useIsomorphicLayoutEffect)'
        }]
    }
}

module.exports = config