module.exports = {
    extends: [
        './base',
        './react',
        './imports',
        './typescript',
    ].map((p) => require.resolve(p)),
};
