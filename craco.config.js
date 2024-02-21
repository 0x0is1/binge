const CracoAlias = require('craco-alias');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // Add the required fallback for stream module
            webpackConfig.resolve.fallback = {
                ...webpackConfig.resolve.fallback,
                stream: require.resolve('stream-browserify')
            };

            return webpackConfig;
        },
    },
};
