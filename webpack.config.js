const path = require("path");
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: "./client/index.jsx",
  mode: "production",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.js$|jsx/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-env",
            ],
          },
        },
      },

    ]
  },
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "bundle.js",
  },
  plugins: [
    new CompressionPlugin()
  ]

};
