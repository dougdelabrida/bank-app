var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'js/app.js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ["react", "stage-2"]
        }        
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/www/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
