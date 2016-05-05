/* eslint no-var: 0, vars-on-top: 0, quote-props: 0 */
require('babel-polyfill');
var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('style.css', { allChunks: true });

module.exports = {
  devtool: 'eval',
  entry: './src/client.js',
  // entry: [
  //   'webpack-dev-server/client?http://localhost:5000',
  //   'webpack/hot/only-dev-server',
  //   './src/client.js'
  // ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    extractCSS
  ],
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },
  externals: {
    'react': 'React'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel',
        include: path.join(__dirname, '../src')
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.scss$/i, loader: extractCSS.extract(['css', 'sass']) }
    ]
  }
};

/* eslint-disable no-var */
//
// var path = require('path');
// var webpack = require('webpack');
//
// module.exports = {
//   entry: './scripts/index',
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'bundle.js',
//     publicPath: '/'
//   },
//   resolve: {
//     extensions: ['', '.js']
//   },
//   devtool: 'source-map',
//   plugins: [
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.DefinePlugin({
//       'process.env': {
//         'NODE_ENV': JSON.stringify('production')
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     })
//   ],
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         loaders: ['babel'],
//         include: path.join(__dirname, 'dist')
//       }
//     ]
//   }
// };
