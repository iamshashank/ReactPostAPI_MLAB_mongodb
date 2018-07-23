module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      { test: /\.css$/, use: 'style-loader' },
      { test: /\.css$/, 
        use: [
                {
                 loader: 'css-loader',
                 options: {
                 modules: true,
                 localIdentName: '[path][name]__[local]--[hash:base64:5]'
                 }
                 }
             ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};