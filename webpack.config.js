const path = require("path");

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

const entryPath = "03_Dzien_4/01_Komponenty/01_Zadanie_1";

module.exports = {
  mode: "none",
  entry: `./${entryPath}/js/app.js`,
  devtool: "inline-source-map",
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`),
    clean: true,
  },
  devServer: {
    open: true,
    hot: true,
    static: [
      {
        directory: path.join(__dirname, entryPath),
        publicPath: "/",
        serveIndex: true,
      },
    ],
    devMiddleware: {
      writeToDisk: true,
    },
    compress: true,
    port: 3001,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin()
  ]
};