var express = require('express');
var app = express();
var port = 3001;

console.log("Start your engines! (vars created, program run start)");
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello small world, an infinitely tiny fraction of the great universe, stranded in a corner, forever confined from exploring new frontiers.');
});

app.get('/greet/:name', function (req, res) {
  var name = req.params.name;
  res.send('Hello, I am a robot and I don\'t have emotions. So please don\'t ask me how i\'m doing.\nBut anyways, how are you doing, <b>' + name + '</b>?');
});

app.listen(port, function () {
  console.log('Vroom Vroom! And there he goes on port ' + port + '! (we listenin\' now)');
/*
  app.get('/', function (req, res) {
    res.send('Great you found seecret');
  });

  app.listen(3002, function () {
    console.log('listening on port 3002!');
  });

  ***
  I will fix this later
  ***

*/

});
