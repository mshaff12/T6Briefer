const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.jsx",
  mode: "production",
  // watch: true,
  // watchOptions: {
  //   ignored: ["node_modules/**"],
  // },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader",
      },
      {
        test: /\.js$|jsx/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "bundle.[contenthash].js",
  },
  plugins: [
    new CompressionPlugin(),
    // new BundleAnalyzerPlugin()
    new HtmlWebpackPlugin({
      template: "./public/template.html",
    }),
  ],
};
