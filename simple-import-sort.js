module.exports = {
    plugins: ['simple-import-sort'],
    rules: {
        // errors
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Node.js builtins.
                    ['^node:'],
                    [`^(${require('module').builtinModules.join('|')})(/|$)`],
                    // Packages. `react` related packages come first.
                    ['^react', '^@?\\w'],
                    // Side effect imports.
                    ['^\\u0000'],
                    // Internal packages.
                    ['^@app/'],
                    // Parent imports. Put `..` last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    // Style imports.
                    [
                        '^.+\\.css$',
                        '^.+\\.less$',
                        '^.+\\.sass$',
                        '^.+\\.scss$',
                        '^.+\\.styl$',
                        '^.+\\.pcss$',
                    ],
                ],
            },
        ],
    },
};
