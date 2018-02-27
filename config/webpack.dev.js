const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
              "webpack-dev-server/client?http://localhost:3005",// bundle the client for webpack-dev-server and connect to the provided endpoint
              './js/index'
            ],

  devServer: {
      port: 3005,
      publicPath:  "/",
      contentBase: helpers.root('public'),
      historyApiFallback: true
  }
  
});
