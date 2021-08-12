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
    filename: 'bundle.js',
    libraryTarget: 'umd',
    library: 'mcaptcha-client'
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
