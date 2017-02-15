import reducer from "./reducer";

export function addTodo(state, newTodo, user) {
  console.log("in addtodo in actionsjs");
  return reducer(state, {
    type: "ADD_TODO",
    newTodo,
    user
  });
}

export function getTodos(state, user) {
  return reducer(state, {
    type: "RETRIEVE_TODOS",
    user
  });
}

export function deleteTodo(state, id, user) {
  return reducer(state, {
    type: "DELETE_TODO",
    id,
    user
  });
}
