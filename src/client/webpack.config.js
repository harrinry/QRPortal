const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = function (_env, argv) {
  const isProduction = process.env.MODE === 'production' || argv.mode === 'production';
  const isDevelopment = !isProduction;
  const mode = process.env.MODE || argv.mode || 'development';

  console.log(`Building QR Portal UI in ${mode} mode`);

  return {
    mode,
    devtool: isDevelopment && 'cheap-module-source-map',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      path: path.join(__dirname, "..", "..", 'dist'),
      filename: '[name].bundle.[chunkhash].js',
      publicPath: '/',
      clean: true,
    },
    watchOptions: {
      ignored: path.join(__dirname, 'node_modules'),
    },
    resolve: {
      modules: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'src'),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: path.join(__dirname, 'node_modules'),
        },
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        { test: /\.(ttf|eot|woff2?)(\?v=[a-z0-9=.]+)?$/i, loader: 'file-loader', options: { name: 'fonts/[name].[ext]' } },
        { test: /\.(jpe?g|png|gif|svg|ico)$/i, loader: 'file-loader', options: { name: 'img/[name].[ext]' } },
      ],
    },
    devServer: {
      port: 8081,
      compress: true,
      historyApiFallback: true,
      open: true,
      contentBase: path.join(__dirname, 'src'),
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
        },
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
        title: "CAST Rules",
        favicon: path.join(__dirname, "src", "assets", "favicon", "favicon.png")
      }),
      new CopyWebpackPlugin({
        patterns: [
          { 
            from: path.join(__dirname, "src", "assets"),
            to: 'assets/' 
          },
        ]
      }),
    ],
  };
};
