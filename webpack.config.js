const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: process.env.NODE_ENV,
  entry: [
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: { 
    host: "localhost",
    port: 8000,
    // enable HMR on the devServer
    hot: true,
    //fallback to root for other urls
    historyApiFallback: true,
    proxy: {
      "/": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '/src/index.html'),
      filename: 'index.html',
    }),
  ],
};

module.exports = config;