import React from "react";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";

export default class App extends React.Component {

  render() {
    return(
      <div>
        <TodoList />
        <NewTodoForm />
      </div>
    );
  }

}
