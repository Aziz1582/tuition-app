// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',             // switch to 'production' for builds
  entry: './src/index.jsx',       // your app’s entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true                   // clean /dist on each build
  },
  resolve: {
    extensions: ['.js', '.jsx']   // import without specifying extensions
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,      // run Babel on .js and .jsx files
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),  // serve from /dist
    hot: true,                                // hot module replacement
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'         // use this HTML as a template
    })
  ]
};
