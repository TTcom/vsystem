var express = require('express')


var app = express()


  app.use(express.static('./dist'))
  
  module.exports = app.listen(3000,function(err){
	if(err){
		console.log(err)
	}
	console.log('listen http://localhost' + 3000 + '/n')
  })
