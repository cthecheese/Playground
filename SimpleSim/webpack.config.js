module.exports = {
  entry: __dirname + '/sim/entry.js',
  output: {
    path: __dirname + '/public/js',
    filename: 'simplesim.js'
  },
  module: {
      loaders: [
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel'
          }
      ]
  }
}
