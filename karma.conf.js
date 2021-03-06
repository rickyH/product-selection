var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('style.css', { allChunks: true });

module.exports = function (config) {
  config.set({

    browsers: [ 'PhantomJS' ],

    singleRun: !!process.env.CI,

    frameworks: [ 'mocha' ],

    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './tests.webpack.js'
    ],

    preprocessors: {
      './tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'mocha' ],

    plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
      require("karma-mocha-reporter"),
      require("karma-phantomjs-launcher"),
      require("karma-chrome-launcher"),
      require("karma-sourcemap-loader")
    ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url', query: {limit: 10240} },
          { test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
          { test: /\.json$/, loader: 'json-loader' },
          { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
          { test: /\.scss$/i, loader: extractCSS.extract(['css', 'sass']) }
        ]
      },
      resolve: {
        modulesDirectories: [
          'src',
          'node_modules'
        ],
        extensions: ['', '.json', '.js']
      },
      plugins: [
        // new webpack.IgnorePlugin(/\.json$/),
        // // new webpack.NoErrorsPlugin(),
        // new webpack.DefinePlugin({
        //   __CLIENT__: true,
        //   __SERVER__: false,
        //   __DEVELOPMENT__: true,
        //   __DEVTOOLS__: false  // <-------- DISABLE redux-devtools HERE
        // }),
        extractCSS
      ]
    },

    webpackServer: {
      noInfo: true
    }

  });
};
