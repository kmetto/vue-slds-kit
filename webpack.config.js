const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    path.resolve(__dirname, 'src', 'index.js'),
    path.resolve(__dirname, 'src', 'styles.sass')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'slds-vue-kit.js',
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
