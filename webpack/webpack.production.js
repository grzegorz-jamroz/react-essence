const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  return {
    devtool: "source-map",
    output: {
      filename: "[name].[hash].js"
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin(),
    ],
  }
};
