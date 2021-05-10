('use strict');
const path = require('path');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const dist = path.resolve(__dirname, 'dist');

module.exports = {
  //devtool: 'inline-source-map',
  //mode: 'development',
  //mode: 'production',
  entry: './js/index.ts',
  output: {
    path: dist,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('dart-sass'),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new WasmPackPlugin({
      crateDirectory: __dirname,
    }),
  ],
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  experiments: {
    executeModule: true,
    outputModule: true,
    syncWebAssembly: true,
    topLevelAwait: true,
    asyncWebAssembly: true,
    layers: true,
    lazyCompilation: true,
  },
};
