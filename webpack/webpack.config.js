/* eslint no-var: 0 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('style.css', { allChunks: true });

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/only-dev-server',
    './src/client.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    extractCSS
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, '../src')
    },
    { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
    { test: /\.scss$/i, loader: extractCSS.extract(['css', 'sass']) }
   ]
 },
 progress: true,
 resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  }
};
