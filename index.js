module.exports = {
    extends: [
        './base',
        './react',
        './imports',
        './typescript',
        './simple-import-sort',
    ].map((p) => require.resolve(p)),
};
