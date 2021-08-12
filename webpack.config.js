('use strict');
const path = require('path');

const dist = path.resolve(__dirname, 'dist');

module.exports = {
  devtool: 'source-map',
  //mode: 'development',
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: dist,
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'mcaptchaGlue'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },

      ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
