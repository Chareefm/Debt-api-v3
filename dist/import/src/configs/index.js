export default () => {
    var _a;
    return ({
        env: (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'local',
        port: process.env.PORT || 3000,
    });
};
//# sourceMappingURL=index.js.map