var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello small world, an infinitely tiny fraction of the great universe, stranded in a corner, forever confined from exploring new frontiers.');
});

app.listen(3001, function () {
  console.log('listening on port 3001!');
/*
  app.get('/', function (req, res) {
    res.send('Grate you found seecret');
  });

  app.listen(3002, function () {
    console.log('listening on port 3002!');
  });

  ***
  I will fix this later
  ***

*/

});
