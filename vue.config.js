const webpack = require('webpack')
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Timestamp = new Date().getTime(); //当前时间为了防止打包缓存不刷新，所以给每个js文件都加一个时间戳
module.exports = {
	devServer: {
		port: 8089,
		//	disableHostCheck: true,
		// proxy: {         //服务器代理，解决前后端接口跨域问题
		//   '/': {    //这里写需要以什么开头的地址才会去代理    
		// 			//1、这里写以什么开头的地址才会去代理；
		// 			//注意/abc是前端自己自定义的参数名称或者是实际的请求地址的参数名称
		// 			//2、在项目中'只要是'/abc'开头的请求地址才用代理.
		// 			//所以你的接口就要这么写 /abc/xx/xx. 
		// 			//3、如果要代理所有的请求地址就写为"/"
		//     target: 'http://xxx.xxxxxx.xxx:50003/',
		// 	ws: false,    //是否代理websockets
		// 	// pathRewrite: {  //如果上面的/abc不是实际的请求地址的开头参数那么在这里就要进行冲洗写实际请求时的地址名称
		// 	//   '^/a': '/mark'
		// 	// }
		//   }
		// }
	},
	css: {
		extract: {
			//打包后的css带版本号，不改变文件名
			// filename: 'css/[name].css?v=' + Timestamp,
			// chunkFilename : 'css/[name].css?v=' + Timestamp
			//打包后的css带版本号,文件名会改变
			filename: 'css/[name].[' + Timestamp + '].css',
			chunkFilename: 'css/[name].[' + Timestamp + '].css'
		},
		loaderOptions: {
			sass: {
				prependData: `@import "@/common/css/mixin.scss";`
			}
		}
	},
	configureWebpack: {
		//关闭 webpack 的性能提示
		performance: {
			hints: false
		},
		output: { // 输出重构  打包编译后的 文件名称  【模块名称.时间戳】
			filename: `js/[name].${process.env.VUE_APP_CURRENTMODE}.${Timestamp}.js`,
			chunkFilename: `js/[name].${process.env.VUE_APP_CURRENTMODE}.${Timestamp}.js`
		},
		// optimization: {
		// 	minimizer: [new UglifyJsPlugin({
		// 		sourceMap: true, //是否需要map文件
		// 		uglifyOptions: {
		// 			output: {
		// 				comments: false // 去掉注释
		// 			},
		// 			warnings: false,
		// 			compress: {
		// 				drop_console: true,
		// 			}
		// 		},
		// 	})],
		// },
		plugins: [
			// Ignore all locale files of moment.js
			new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) //忽略 moment 的本地化内容
		]
	},
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	chainWebpack: (config) => {
		config.module
			.rule("eslint")
			.use("eslint-loader")
			.loader("eslint-loader")
			.tap(options => {
				options.fix = true; //设置自动修复eslint
				return options;
			})
	}
}