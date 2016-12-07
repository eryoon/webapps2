'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const port = 3000;

const app = express(); //const lets you change the contents of it... so you cant change foo but you can change foo.bar
app.use(bodyParser.json());
function loadTodos(callback) {
return fs.readFile("./todos.json", (err, data) =>{
  if(err) throw err;
  callback(JSON.parse(data));

});

}


app.route("/todos").get((req, res) => {
  loadTodos((json) =>{
    res.json(json.data);

  });
}).post((req, res) => {


  loadTodos((json) => {

    const todos = json.data;
    const lastId = json.lastId;
    console.log(req.body);
//    res.send("Creating todo " + req.body);
    let newTodo = req.body;
    console.log(newTodo);
    newTodo.id = lastId + 1;
    todos.push(newTodo);
    json.lastId = newTodo.id;
    json.data = todos;
    fs.writeFile("./todos.json", "{ \"data\":" + JSON.stringify(json.data) + "}");
    res.status(200).end();



  //
  });

});

app.route("/todos/:id")
.get((req, res) => {
const id = parseInt(req.params.id);
loadTodos((json) => {
  const todos = json.data;
  //console.log(todos.length);
  //console.log(todos);
  for(var t = 0; t < todos.length; t++){ //horrible horrible foreachs. const t is the INDEX not the object in array
    const todo = todos[t];

    if(todo.id === id){

      return res.json(todo);
    }else{
    //  console.log(`we tried #${t} in list, but found ${todo.id} as todo id`);

    }
  }
  return res.send(`Nope, couldn't find the todo with id ${id}`);
});

}).put((req, res) =>{
  const id = req.params.id;
  res.send(`Updating todo num ${id}`);

}).delete((req, res) => {
  const id = req.params.id;
  res.send(`Delete todo num ${id}`);
});

app.listen(port, () => {
  console.log(`*RING RING*\nHello? You there?\nYes! Welcome to port ${port}!`);
});
