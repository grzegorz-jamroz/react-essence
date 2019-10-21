const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const modeConfig = env => require(`./webpack/webpack.${env}`)(env);
const presetConfig = require("./webpack/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      entry: {
        app: './src/js/App.js',
      },
      output: {
        filename: "[name].js",
        path: __dirname + '/dist'
      },
      plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          template: './webpack/index.ejs',
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin()
      ],
      module: {
        rules: [
          {
            test: /\.ts$/,
            use: `ts-loader`
          },
          {
            test: /\.(jpe?g|ttf|svg)$/,
            use: "url-loader"
          },
          {
            test: /\.(js|jsx)$/,
            include: [path.resolve(__dirname, 'src')],
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-react',
                  'module:metro-react-native-babel-preset'
                ],
                plugins: [
                  '@babel/plugin-syntax-dynamic-import',
                  '@babel/plugin-proposal-class-properties'
                ]
              }
            }
          },
          {
            test: /\.scss$/,
            use: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
          },
          {
            test: /\.VariablesExport.scss$/,
            loaders: ["style-loader", "sass-loader"]
          }
        ]
      }
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  )
};
