const path = require('path');

module.exports = {
  // buscar com o path o arquivo exato
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  // qual é o arquivo que vai com o webpack
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // quais tipos de arquivo ele vai conseguir ler
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // como a aplicação vai se comportar quando importar cada tipo de arquivo
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ],
  }
}