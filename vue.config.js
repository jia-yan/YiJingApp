//module.exports = {
  // 基本路径
  //baseUrl: './'在vue-cli.3.3版本后 baseUrl被废除了，因此这边要写成 publicPath。
  // // 输出文件目录
  // outputDir: 'dist',
  // // webpack-dev-server 相关配置
  // devServer: {
  //   port: 8888,
  // },
//}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}
