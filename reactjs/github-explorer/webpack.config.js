const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// definindo o modo de desenvolvimento (produção ou teste)
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  // sourcemap
  devtool:isDevelopment ? 'eval-source-map' : 'source-map',
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
  // pegar o consteúdo estático (HTML)
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true
  },
  // pega o arquivo bundle.js para executar
  plugins: [
    // se estiver no modo de Desenvolvimento(Produção), então executa a plugin abaixo
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),  //vai remover o true/false
  // como a aplicação vai se comportar quando importar cada tipo de arquivo
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              // se estiver no modo de Desenvolvimento(Produção), então executa a plugin abaixo
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean) //vai remover o true/false
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ],
  }
}