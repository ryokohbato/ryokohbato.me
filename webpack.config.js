const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    "script/main": "./src/script/main.ts",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist/"),
  },
  module: {
    rules: [
      {
        test: /\.css|\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.ts/,
        exclude: /node_modules/,
        use: [
          "ts-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "src/**/*.(html|jpg|jpeg|png)",
          to({ context, absoluteFilename }) {
            return absoluteFilename.replace(`${path.resolve(__dirname)}/src/`, "");
          },
        },
      ]
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9876,
    open: true,
  },
  devtool: "eval-source-map",
};
