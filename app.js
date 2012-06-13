var express = require('express');
var app = express.createServer(express.logger());

app.configure(function() {
  'use strict';
  app.use(express.bodyParser());
  app.use(app.router);
});

app.get('/', function(req, res) {
  'use strict';
  res.send("<h1 style='font-size: 500%;'>Hello Demo Day! Ready to invest?</h1>");
});

app.get('/json', function(req, res) {
  'use strict';
  res.send({'hello' : 'all!'});
});

var port = process.env.PORT || 3000 ;

app.listen(port, function() {
  'use strict';
  console.log('listening on port ' + port);
});
