const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: "../todo-app/dist/out-tsc/src/main.js",
  devtool: "source-map",
  output: {
    path: "/Users/rivabu/aaa/angular5/todo-app/public",
    filename: "bundle.js"
  },
  optimization: {
    minimize: false,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/
    })]
  }
};
