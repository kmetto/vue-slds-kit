import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import config from '../config';

export default {
  context: config.root,
  entry: [
    path.resolve('src', 'index.js'),
    path.resolve('src', 'styles.sass'),
  ],
  output: {
    path: config.lib,
    filename: 'vue-slds-kit.js',
  },
  devtool: 'source-map',
  module: {
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
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'resolve-url-loader' },
            { loader: 'sass-loader?sourceMap' },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('vue-slds-kit.css'),
  ],
};
