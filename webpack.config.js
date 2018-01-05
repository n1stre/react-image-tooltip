const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    filename: "./src/index.js"
  },
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist")
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "React Image Tooltip",
    })
  ]
}