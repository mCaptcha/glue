("use strict");
const path = require("path");

const dist = path.resolve(__dirname, "dist");

module.exports = {
  //devtool: 'inline-source-map',
  //mode: 'development',
  mode: "production",
  entry: "./src/",
  output: {
    path: dist,
    libraryTarget: "umd",
    filename: "index.js",
    library: "mcaptchaGlue",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  plugins: [],
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      "...",
    ],
  },
};
