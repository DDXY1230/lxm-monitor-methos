const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  context: process.cwd(), //当前目录
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'monitor.js'
  },
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist')
    // before(router) {
    //   router.get('/success', function (req, res) {
    //     res.json({
    //       id: 1
    //     })// 200
    //   })
    //   router.post('/error', function (req, res) {
    //     res.sendStatus(500) //500
    //   })
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'head' //  注入脚本要先执行 所以要注入到头部
    })
  ]
}