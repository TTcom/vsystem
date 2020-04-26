var express = require('express')

var proxy = require('http-proxy-middleware');
var app = express()





  //app.use(express.static('./dist'))

  // app.use('/', proxy({
  //   target: "http://221.224.123.197:50003/",
  //   changeOrigin: true
  // }));

  module.exports = app.listen(50000,function(err){
	if(err){
		console.log(err)
	}
	console.log('listen http://localhost' + 50000 + '/n')
  })
