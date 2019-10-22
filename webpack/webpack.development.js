const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  const devServer = {
    port: 3000,
    open: true,
    historyApiFallback: true
  };

  return {
    devtool: "inline-source-map",
    output: {
      filename: "app.js"
    },
    devServer,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader?sourceMap"]
        },
        {
          test: /\.s[ac]ss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader?sourceMap", "sass-loader?sourceMap"]
        },
        {
          test: /\.(jpe?g|svg|png|ttf|woff|woff2|eot)$/,
          use: "url-loader"
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin(),
    ],
  }
};
