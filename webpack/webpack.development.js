module.exports = () => {
  const devServer = {
    port: 3000,
    open: true,
  };

  return {
    devtool: "inline-source-map",
    output: {
      filename: "app.js",
    },
    devServer,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader?sourceMap"]
        }
      ]
    }
  }
};
