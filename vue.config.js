/* eslint no-param-reassign:
    ["error", { "props": true, "ignorePropertyModificationsFor": ["options"] }] */
module.exports = {
    publicPath: '/scss-style-guide/',
    chainWebpack: config => {
        config.module
            .rule("eslint")
            .use("eslint-loader")
            .tap(options => {
                options.fix = true;
                return options;
            });

    }
};