'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const port = 3000;
const db = "./todos.json";
const app = express();

app.use(bodyParser.json());

//Set up static routes
app.use(express.static(__dirname + "/public"));


function loadTodos(file, callback) {
  console.log("in load todos function");
  return fs.readFile("./TodoFiles/todos_" + file + ".json", (err, data) => {
    console.log("We are done with fs.readfile");
    if (err) throw err;
    callback(JSON.parse(data));
  });
}

function saveTodos(file, json, callback) {
  return fs.writeFile("./TodoFiles/todos_" + file + ".json", JSON.stringify(json, null, " "), /*{"flag": 'w'}, */callback);
}

app.route("/todos/:user")
.get((req, res) => {
  console.log("in get, about to call loadtodos")
  loadTodos(req.params.user, (json) =>{
    console.log("we done with loadtodos");
    res.json(json.data);
  });
})
.post((req, res) => {
  console.log("we got in post");
  loadTodos(req.params.user, (json) => {
    console.log("we got in the callback of loadtodos");
    const todos = json.data;
    console.log("we made todos var");
    json.lastId++;
    let newTodo = req.body;
    console.log(req.body);
    newTodo.completed = false;
    newTodo.id = json.lastId;
    todos.push(newTodo);
    json.data = todos;
    console.log("we about to go into savetodos");
    return saveTodos(req.params.user, json, (err) => {
      console.log("we saved todos");
      if (err) throw err;
      res.status(200).end();
    });
  })
});

app.route("/todos/:user/:id")
.get((req, res) => {
  console.log("Get method called");
  const id = parseInt(req.params.id);
  loadTodos(req.params.user, (json) => {
    console.log("Loaded todos");
    const todos = json.data;
    for (const todo of todos) {
      if (todo.id === id) {
        return res.json(todo);
      }
    }
    return res.send("No todo found");
  });
})
.put((req, res) => {
  const id = parseInt(req.params.id);
  console.log(`Updating ${id}`);
  const newData = req.body;
  loadTodos(req.params.user, (json) => {
    const todos = json.data;
    for (const t of todos) {
      if (t.id === id) {
        t.completed = newData.completed;
        t.text = newData.text;
        json.data = todos;
        return saveTodos(req.params.user, json, (err) => {
          if (err) throw err;
          res.status(200).end();
        });
      }
    }
    return res.status(404).send("No such todo");
  });
})
.delete((req, res) => {
  const id = parseInt(req.params.id);
  loadTodos(req.params.user, (json) =>{
    const todos = json.data.filter(t => {
      return t.id !== id;
    });
    json.data = todos;
    return saveTodos(req.params.user, json, (err) => {
      if (err) throw err;
      res.status(200).end();
    });
  });
});

app.listen(port, () => {
  console.log(`Vroom Vroom! port ${port} is ready to go!`);
});
