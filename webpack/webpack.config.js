/* eslint no-var: 0 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const extractCSS = new ExtractTextPlugin('style.css', { allChunks: true });
// multiple extract instances
// const extractCSS = new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true });
// new ExtractTextPlugin('stylesheets/[name].css');

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

//  { test: /\.scss$/i, loader: ExtractTextPlugin.extract('style', 'css?importLoaders=2&sourceMap!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true') } // eslint-disable-line max-len


// +var path = require('path');
// +var webpack = require('webpack');
// +
// +module.exports = {
// +  devtool: 'eval',
// +  entry: [
// +    'webpack-dev-server/client?http://localhost:3000',
// +    'webpack/hot/only-dev-server',
// +    './src/client.js'
// +  ],
// +  output: {
// +    path: path.join(__dirname, 'dist'),
// +    filename: 'bundle.js',
// +    publicPath: '/static/'
// +  },
// +  plugins: [
// +    new webpack.HotModuleReplacementPlugin()
// +  ],
// +  module: {
// +    loaders: [{
// +      test: /\.js$/,
// +      loaders: ['babel'],
// +      include: path.join(__dirname, 'src')
// +    }]
// +  }
// +};
