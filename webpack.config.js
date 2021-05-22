const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // entry point to the react project
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.js$/, // compile only files that has .js extension
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(jpg|png|svg)$/,
      loader: 'url-loader',
      options: {
        limit: 25000,
      }
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
      use: { loader: 'file-loader?name=[name].[ext]' }
    }]
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './public/index.html' })
  ]
}