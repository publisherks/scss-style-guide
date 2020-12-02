/* eslint no-param-reassign:
    ["error", { "props": true, "ignorePropertyModificationsFor": ["options"] }] */
module.exports = {
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