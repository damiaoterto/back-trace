const path = require('path')

const {
  NODE_ENV = 'production',
} = process.env

module.exports = {
  entry: './index.ts',
  mode: NODE_ENV,
  target: 'node',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]s?$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015',
        },
      }
    ],
  },
}
