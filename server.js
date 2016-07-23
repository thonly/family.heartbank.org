var express = require('express');
var app = express();

app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('*', function(req, res) {
  res.redirect('/');
});

app.listen(process.env.PORT || '3000', function() {
  console.log('App successfully connected');
});