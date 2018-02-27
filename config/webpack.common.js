const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const helpers = require('./helpers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


HtmlWebpackPlugin.prototype.generateAssetTags = function (assets) {
  // Turn script files into script tags
  var scripts = assets.js.map(function (scriptPath) {
    return {
      tagName: 'script',
      closeTag: true,
      attributes: {
        type: 'text/javascript',
        src: '/' + scriptPath
      }
    };
  });
  // Make tags self-closing in case of xhtml
  var selfClosingTag = !!this.options.xhtml;
  // Turn css files into link tags
  var styles = assets.css.map(function (stylePath) {
    return {
      tagName: 'link',
      selfClosingTag: selfClosingTag,
      attributes: {
        href: '/' + stylePath,
        rel: 'stylesheet'
      }
    };
  });
  // Injection targets
  var head = [];
  var body = [];

  // If there is a favicon present, add it to the head
  if (assets.favicon) {
    head.push({
      tagName: 'link',
      selfClosingTag: selfClosingTag,
      attributes: {
        rel: 'shortcut icon',
        href: assets.favicon
      }
    });
  }
  // Add styles to the head
  head = head.concat(styles);
  // Add scripts to body or head
  if (this.options.inject === 'head') {
    head = head.concat(scripts);
  } else {
    body = body.concat(scripts);
  }
  return {head: head, body: body};
};


module.exports = {

    context: helpers.root('src/front'),

    entry: './js/index',

    output: {
        path: helpers.root( "built"),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js']
    },


    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: 'babel-loader'
            },
            {
              test: /\.svg$/,
              loader: 'svg-inline-loader'
            },
            {
              test: /\.(png|jpg|gif|otf|eot|woff|woff2|ttf)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {}  
                }
              ]
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({ filename: '[name].css' }),
        new HtmlWebpackPlugin({
            hash: true,
            template: './index.html'
        })
    ]
};
