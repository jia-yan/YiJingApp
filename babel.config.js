module.exports = {
	presets: [
		'@vue/cli-plugin-babel/preset'
	],
	plugins: [
		["@babel/plugin-transform-modules-commonjs", { "strictMode": false }]
	]
}
//配置文件后一定要重新启动服务
//第二个是处理取消严格模式