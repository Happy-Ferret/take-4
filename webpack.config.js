
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  devtool: 'source-map',
  debug: true,
  stats: {
    colors: true,
    reasons: true
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot','babel?presets[]=es2015,presets[]=react']
      },
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
      {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=750000'
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./node_modules/node-normalize-scss")]
  }
}
