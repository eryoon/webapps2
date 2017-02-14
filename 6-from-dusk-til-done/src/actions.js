import reducer from "./reducer";

export function addTodo(state, newTodo) {
  console.log("in addtodo in actionsjs");
  return reducer(state, {
    type: "ADD_TODO",
    newTodo
  });
}

export function getTodos(state, user) {
  return reducer(state, {
    type: "RETRIEVE_TODOS",
    user
  });
}

export function deleteTodo(state, id) {
  return reducer(state, {
    type: "DELETE_TODO",
    id
  });
}
