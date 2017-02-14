import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class NewTodoForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        newText: "Get Milk",
        newDate: new Date().toISOString().substr(0,10)
      }
    }

    textChangeHandler(e) {
      this.setState({newText:e.target.value})
    }

    dateChangeHandler(e) {
      this.setState({newDate:e.target.value})
    }

    submitHandler() {
      this.props.dispatch(addTodo({
        text:this.state.newText,
        date: this.state.newDate
      }));
      this.setState({
        newText:"",
        newDate: new Date().toISOString().substr(0,10)
      });
    }

    render() {
      return (
        <form>
          <h2>Add a Todo</h2>
          <input type="text" value={this.state.newText} onChange={this.textChangeHandler.bind(this)}/>
          <input type="date" value={this.state.newDate} onChange={this.dateChangeHandler.bind(this)}/>
          <button type="button" onClick={this.submitHandler.bind(this)}>
            Add
          </button>
        </form>
      )
    }
}

export default connect()(NewTodoForm);
