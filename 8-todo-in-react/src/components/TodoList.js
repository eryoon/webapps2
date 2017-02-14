import React, {PropTypes} from "react";
import { connect } from "react-redux";
import { fetchTodos, deleteTodo, editTodo } from "../actions";
import Todo from "./Todo";

class TodoList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchTodos());
  }

  deleteHandler(id) {
    this.props.dispatch(deleteTodo(id));
  }

  editHandler(id, editedTodo) {
    this.props.dispatch(editTodo(id, editedTodo));
  }

  render() {
    return (
      <div>
        {this.props.todos.map((todo) => {
          return (
            <Todo key={todo.id}
            deleteHandler={this.deleteHandler.bind(this)}
            editHandler={this.editHandler.bind(this)}
            {...todo}
            />
          );
        })}
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}



TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired)
}

export default connect(mapStateToProps)(TodoList);
