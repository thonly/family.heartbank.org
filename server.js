var express = require('express');
var app = express();

app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.get('*', function(req, res) {
  res.redirect('/');
});

/*app.listen(process.env.PORT || '80', function() {
  console.log('App successfully connected');
});*/

/*if (module === require.main) {
  // [START server]
  // Start the server
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log('App listening on port %s', port);
  });
  // [END server]
}

module.exports = app;*/

// Start the server
var server = app.listen(process.env.PORT || '8080', function () {
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit.');
});
