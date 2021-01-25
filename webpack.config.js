const path = require("path");

module.exports = {
  entry: "./client/index.jsx",
  mode: "development",
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

    ],
  },
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "bundle.js",
  },
};
