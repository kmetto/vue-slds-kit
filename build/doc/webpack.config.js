import path from 'path';
import config from '../config';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  entry: [
    path.resolve(config.docsSrc, 'index.js'),
  ],
  output: {
    path: config.docsDist,
    filename: 'index.js',
  },
  devtool: "source-map",
  module:{
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            sass: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
          },
        },
      },
      {
        test: /\.(woff2?)$/,
        loader: 'file-loader',
        options: {
          publicPath: 'fonts/',
          outputPath: 'fonts/',
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {loader: 'css-loader'},
            {loader: 'resolve-url-loader'},
            {loader: 'sass-loader?sourceMap'},
          ]
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("slds-vue-kit.css"),
  ]
};
