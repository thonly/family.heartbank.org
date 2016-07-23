var express = require('express');
var app = express();

app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('*', function(req, res) {
  res.redirect('/');
});

// Change port and hostname to hosting service
var port = 3000;
var hostname = 'localhost'

app.listen(port, hostname);