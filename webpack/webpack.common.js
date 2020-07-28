const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpack = new HtmlWebpackPlugin({
  template: "./assets/index.template.html",
  filename: "index.html",
});

module.exports = {
  entry: "./assets/javascript/entry.js",
  output: {
    publicPath: "/",
    path: path.join(__dirname, ".."),
    filename: "dist/javascript/bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./assets/index.template.html",
      filename: "index.html",
      minify: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000",
      },
    ],
  },
};
