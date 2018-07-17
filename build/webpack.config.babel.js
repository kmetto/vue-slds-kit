import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import config from './config';

export default {
  context: config.root,
  entry: {
    'vue-slds-kit.js': path.resolve('src', 'index.js'),
  },
  output: {
    path: config.lib,
    filename: '[name]',
    library: 'VueSldsKit',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|lib)/,
      },
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
            {
              loader: 'css-loader',
              options: {
                url: false,
                import: false,
              },
            },
            { loader: 'sass-loader?sourceMap' },
          ],
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(config.lib, {
      verbose: true,
      allowExternal: true,
    }),
    new ExtractTextPlugin('vue-slds-kit.css'),
    new CopyWebpackPlugin([
      {
        from: 'node_modules/@salesforce-ux/design-system/assets',
        to: 'assets',
      },
    ]),
  ],
};
