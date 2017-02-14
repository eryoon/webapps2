import React, {PropTypes} from "react";
import EditTodo from "./EditTodo";

export default class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      text: props.text,
      completed: props.completed,
      date: props.date,
      editing: false
    }
  }

  completeToggle(e) {
    const completed = e.target.checked;
    this.setState({completed})
    return {
      id: this.props.id,
      completed,
      text: this.props.text,
      date: this.props.date
    };
  }

  editToggle() {
    this.setState({editing:!this.state.editing})
  }


  render() {
    return (
      <div>
        <h3>{this.props.date}: {this.props.text}</h3>
        <input
         type="checkbox"
         checked={this.state.completed}
         onChange={(e)=> {
           this.props.editHandler(this.props.id,this.completeToggle(e));
         }}
        />
        <button
          type="button"
          onClick={this.editToggle.bind(this)}
        >
          Edit
        </button>
        <button
          type="delete"
          onClick={() => {this.props.deleteHandler(this.props.id)}}
        >
          Delete
        </button>
        <EditTodo
          date={this.props.date}
          text={this.props.text}
          active={this.state.editing}
          id={this.props.id}
          completed={this.state.completed}
          cancelHandler={this.editToggle.bind(this)}
          editHandler={this.props.editHandler.bind(this)}
        />
      </div>

    )
  }
}

Todo.propTypes = {
  todo: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired)
}
