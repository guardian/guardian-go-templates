const path = require('path');

module.exports = {
  entry: './ArticleTemplates/common.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'common.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};