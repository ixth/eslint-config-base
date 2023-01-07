module.exports = {
    extends: [
        './base',
        './imports',
        './typescript',
    ].map((p) => require.resolve(p)),
};
