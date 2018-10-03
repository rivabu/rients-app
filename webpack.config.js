const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {AngularCompilerPlugin} = require('@ngtools/webpack');


module.exports = function () {
  return {
    entry: './src/main.ts',
    output: {
      path: __dirname + '/public',
      filename: 'app.js'
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        {test: /\.ts$/, loaders: ['@ngtools/webpack']},
        {test: /\.css$/, loader: 'raw-loader'},
        {test: /\.html$/, loader: 'raw-loader'}
      ]
    },

    plugins: [
      new CopyWebpackPlugin([
        {from: 'src/assets', to: 'assets'}
      ]),
      new HtmlWebpackPlugin({  // Also generate a test.html
        filename: __dirname + '/public/index.html',
        template: __dirname + '/src/index.html',
        chunksSortMode: 'none', // solves cyclic dependency
        inject: 'head'
      }),
      new AngularCompilerPlugin({
        tsConfigPath: './tsconfig.json',
        entryModule: './src/app/app.module#AppModule',
        sourceMap: true
      })

    ]
  };
};
