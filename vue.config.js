const path = require('path');
  function resolve (dir) {
    return path.join(__dirname, dir)
}


module.exports={
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	chainWebpack: (config)=>{
	   config.resolve.alias
	       .set('src', resolve('src'))
	       .set('components',resolve('src/components'))
	       .set('common',resolve('src/common'))
		   .set('base',resolve('src/base'))
	
	}, 
	
	
	
	
}