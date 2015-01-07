var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('<!doctype html><html>' +
           '<head>' +
           '<script type="text/javascript" src="/bundle.js"></script>' +
           '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" />' +
           '</head>' +
           '<body></body></html>');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Demo app listening at http://%s:%s', host, port);
});
