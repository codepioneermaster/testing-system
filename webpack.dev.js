const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    clientLogLevel: 'silent',
    historyApiFallback: true,
    stats: 'minimal',
    port: 3000,
    open: true,
    hot: true,
  },
})