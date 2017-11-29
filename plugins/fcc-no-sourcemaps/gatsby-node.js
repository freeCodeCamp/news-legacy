// turn off sourcemaps, some of them are just too big for Netlify
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config._config.devtool = false;
  }
};
