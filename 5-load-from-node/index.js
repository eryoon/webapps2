const express = require('express');
const fs = require('fs');
const port = 3000;

const app = express(); //const lets you change the contents of it... so you cant change foo but you can change foo.bar

function loadTodos(callback) {
return fs.readFile("./todos.json", (err, data) =>{
  if(err)
  throw err;
  callback(JSON.parse(data));

});

}


app.route("/todos").get((req, res) => {
loadTodos((json) =>{
  res.json(json.data);
});
}).post((req, res) => {
  res.send("ABARACADABARA, summon todos!");

});

app.listen(port, () => {
  console.log(`*RING RING*\nHello? You there?\nYes! Welcome to port ${port}!`);
});
