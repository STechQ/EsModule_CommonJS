const path = require('path');

module.exports = {
  entry: { cjs: "./cjs.ts" },
  mode: 'development',
  watch: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ]
  },
  plugins: [
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.styl'],
    extensionAlias: {
      '.js': ['.js', '.ts'],
    },
  },
  output: {
    filename: "cjs.js",
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: "cjs",
    clean: true,
    globalObject: "this",
  },
};