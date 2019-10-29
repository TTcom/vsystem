var express = require('express')


var app = express()


  app.use(express.static('./dist'))
  
  module.exports = app.listen(50000,function(err){
	if(err){
		console.log(err)
	}
	console.log('listen http://localhost' + 50000 + '/n')
  })
