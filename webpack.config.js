const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const alias = {
  "$presentational": resolve(__dirname, "src/app/components/presentational"),
  "$containers": resolve(__dirname, "src/app/components/containers"),
}

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: resolve(__dirname, "dist"),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      template: "./src/index.tpl.html",
      title: "React Image Tooltip",
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              // publicPath: "dist/",
              // outputPath: "assets/images/"
            }  
          }
        ]
      }
    ]
  }
}