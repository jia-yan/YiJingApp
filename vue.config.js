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
const webpack = require('webpack')
//const vuxLoader = require('vux-loader')
// const webpackConfig = originalConfig // 原来的 module.exports 代码赋值给变量 webpackConfig



// vux 相关配置,使用vux-ui
    // configureWebpack: config => {
    //     vuxLoader.merge(config, {
    //         options: {},
    //         plugins: ['vux-ui']
    //     })
    // },


 
module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"windows.jQuery": "jquery"
			})
		]
	},
	publicPath: process.env.NODE_ENV === 'production' ?
		'./' :
		'/'
}

// module.exports = vuxLoader.merge(webpackConfig, {
//   plugins: ['vux-ui']
// })