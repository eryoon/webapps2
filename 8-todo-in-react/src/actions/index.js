import axios from "axios";

export function addTodo(newTodo) {
  return (dispatch) => {
    return axios.post("/todos",newTodo)
      .then( (response) => {
        return response.data;
      })
      .then( (json) => {
        return dispatch(receiveTodos(json));
      });
  }
}

export function requestTodos() {
  return {
    type: "REQUEST_TODOS"
  }
}

function receiveTodos(todos) {
  return {
    type: "RECEIVE_TODOS",
    todos
  }
}

export function fetchTodos() {
  return (dispatch) => {
    return axios.get("/todos")
      .then( (response) => {;
        return response.data;
      })
      .then( (json) => {
        return dispatch(receiveTodos(json));
      });
  }
}

export function deleteTodo(id) {
  return (dispatch) => {
    return axios.delete(`/todos/${id}`)
      .then( (response) => {
        return response.data;
      })
      .then( (json) => {
        return dispatch(receiveTodos(json));
      });
  }
}

export function editTodo(id, editedTodo) {
  return (dispatch) => {
    console.log("Edit callback");
    return axios.put(`/todos/${id}`,editedTodo)
      .then( (response) => {
        return response.data;
      })
      .then( (json) => {
        return dispatch(receiveTodos(json));
      });
  }
}
