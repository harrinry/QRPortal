const path = require('path');
module.exports = {
  entry: path.join(__dirname, 'public', 'src', 'setup','index'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /.js?$/,
      include: [
        path.resolve(__dirname, 'public', 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015','react'],
        plugins: ['react-html-attrs',
          'transform-class-properties',
          'transform-decorators-legacy',
          'transform-react-jsx']
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.svg$/,
      loader: 'svg-inline-loader'
    }]
  },
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./public/src')
    ],
    extensions: ['.json', '.js', '.jsx', '.css', '.scss']
  },
  devtool: 'source-map'
};