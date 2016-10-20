var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: "./src",
  output: {
    path: path.join(__dirname, "public/assets/js"),
    publicPath: "/assets/js/",
    filename: "bundle.js"
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loaders: ["eslint","source-map-loader"]
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  devtool: "source-map"
}
