// turn off sourcemaps, some of them are just too big for Netlify
exports.modifyWebpackConfig = ({ config }) => {
  config._config.devtool = false;
};
