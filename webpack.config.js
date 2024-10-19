const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Update this if your entry file is different
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'build'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true, // For client-side routing
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Update this if your template file is different
    }),
  ],
  mode: 'development', // Change to 'production' for production builds
};
