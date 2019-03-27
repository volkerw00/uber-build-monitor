const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './app',
    host: '0.0.0.0',
    port: 8080,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname + '/..', 'app')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  watch: true
};