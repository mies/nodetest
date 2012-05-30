var express = require('express');
var app = express.createServer(express.logger());

app.configure(function() {
  app.use(express.bodyParser());
  app.use(app.router);
});

app.get('/', function(req, res) {
  res.send({'hello' : 'world'});
});

var port = process.env.PORT || 3000 ;

app.listen(port, function() {
  console.log('listening on port ' + port);
});
