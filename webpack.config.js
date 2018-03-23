const path = require('path');
module.exports = {
  entry: path.join(__dirname, 'qrp_WebApp', 'src','index'),
  output: {
    filename: 'QRPortal.js',
    path: path.resolve(__dirname, 'qrp_WebApp')
  },
  module: {
    rules: [{
      test: /.js?$/,
      include: [
        path.resolve(__dirname, 'qrp_WebApp', 'src')
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
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map'
};