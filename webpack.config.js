var path = require('path');
var webpack = require('webpack');

var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,         // Match both .js and .jsx files
        exclude: /node_modules/, 
        loader: "babel-loader", 
        query:
          {
            presets:['react']
          }
      },
      {
        test: /\.css$/, // Only .css files
        loader: 'style-loader!css-loader?modules' // Run both loaders
      },
      // SASS
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?modules'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      },
      {
        test: /\.woff$/,
        loader: 'url?limit=100000'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by chenss')
  ]
};

module.exports = config;