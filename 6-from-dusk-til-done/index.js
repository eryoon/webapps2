const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const port = 3000;
const db = "./todos.json";
const app = express();

app.use(bodyParser.json());

//Set up static routes
app.use(express.static(__dirname + "/public"));


function loadTodos(callback) {
  return fs.readFile(db, (err, data) => {
    if (err) throw err;
    callback(JSON.parse(data));
  });
}

function saveTodos(json, callback) {
  return fs.writeFile(db, JSON.stringify(json), callback);
}

app.route("/todos")
.get((req, res) => {
  loadTodos((json) =>{
    res.json(json.data);
  });
})
.post((req, res) => {
  loadTodos((json) => {
    const todos = json.data;
    json.lastId++;
    let newTodo = req.body;
    newTodo.completed = false;
    newTodo.id = json.lastId;
    todos.push(newTodo);
    json.data = todos;
    return saveTodos(json, (err) => {
      if (err) throw err;
      res.status(200).end();
    });
  })
});

app.route("/todos/:id")
.get((req, res) => {
  const id = parseInt(req.params.id);
  loadTodos((json) => {
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
  loadTodos((json) => {
    const todos = json.data;
    for (const t of todos) {
      if (t.id === id) {
        t.completed = newData.completed;
        t.text = newData.text;
        json.data = todos;
        return saveTodos(json, (err) => {
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
  loadTodos((json) =>{
    const todos = json.data.filter(t => {
      return t.id !== id;
    });
    json.data = todos;
    return saveTodos(json, (err) => {
      if (err) throw err;
      res.status(200).end();
    });
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}!`);
});
