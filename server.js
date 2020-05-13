var express = require('express')

var proxy = require('http-proxy-middleware');
var app = express()





//app.use(express.static('./dist'))

// app.use('/', proxy({
//   target: "http://221.224.123.197:50003/",
//   changeOrigin: true
// }));

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Document</title>
    </head>
    <body>
        2423
    </body>
    </html>`)
})

app.get('/list', (req, res) => {

  res.end('list')
})

module.exports = app.listen(50000, function (err) {
  if (err) {
    console.log(err)
  }
  console.log('listen http://localhost' + 50000 + '/n')
})