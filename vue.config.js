const path = require("path");

module.exports = {
    publicPath: '<alejandrohtadinom.github.io>',
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
    }
  }
};
