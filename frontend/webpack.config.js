const path = require('path');

module.exports = {
  entry: './src/index.js',  // Your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // Bundle name
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // Apply Babel loader to .js and .jsx files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,  // You can change this if you prefer a different port
  },
};
