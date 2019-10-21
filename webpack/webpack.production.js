const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  return {
    devtool: "source-map",
    output: {
      filename: "[name].[hash].js",
      path: path.resolve(__dirname, 'public/dist'),
      publicPath: '/dist/'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        },
        {
          test: /\.s[ac]ss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
          test: /\.(ttf|woff|woff2|eot)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
        {
          test: /\.(jpe?g|svg|png)$/,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
          },
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin(),
    ],
  }
};
