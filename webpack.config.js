const webpack = require('webpack');
const fs = require('fs'); // to check if the file exists
const path = require('path'); // to get the current path

module.exports = (env) => {
return {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          { loader: 'style-loader', options: { injectType: 'singletonStyleTag'}},
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
         test: /\.(png|svg|jpg|gif|PNG)$/,
         use: [
           'file-loader',
         ],
       },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
    })
  ],
  devServer: {
     contentBase: __dirname,
     hot: true,
     historyApiFallback: true,
     contentBase: './',
     open: true
  }
}
};
