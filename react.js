module.exports = {
    extends: ['prettier/react', 'plugin:react-hooks/recommended'],
    rules: {
        // patch-up a11y
        'jsx-a11y/label-has-associated-control': [
            'error',
            { assert: 'either' },
        ],

        // errors
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.jsx', '.tsx'] },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',

        // warnings
        'react/destructuring-assignment': 'warn',
        'react/jsx-props-no-spreading': 'warn',
        'react/forbid-prop-types': 'warn',
    },
    overrides: [
        {
            files: ['*.tsx'],
            rules: {
                // off
                'react/prop-types': 'off',
                'react/require-default-props': 'off',
            },
        },
    ],
};
