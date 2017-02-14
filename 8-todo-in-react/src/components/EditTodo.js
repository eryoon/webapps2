import React from "react";


export default class EditTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: props.date,
      text: props.text
    }
  }

  textChangeHandler(e) {
    this.setState({text: e.target.value});
  }

  dateChangeHandler(e) {
    this.setState({date: e.target.value});
  }

  cancelEdit() {
    this.setState({active:false})
  }

  updateTodo() {
    this.props.editHandler(this.props.id, {
      id: this.props.id,
      text: this.state.text,
      completed: this.props.completed,
      date: this.state.date
    })
  }

  render() {

    let classes = "edit-todo";
    if (this.props.active) {
      classes += " active";
    }
    return (
      <div className={classes}>
        <input type="text" value={this.state.text} onChange={this.textChangeHandler.bind(this)}/>
        <input type="date" value={this.state.date}  onChange={this.dateChangeHandler.bind(this)}/>
        <button type="button" onClick={this.updateTodo.bind(this)}>Save</button>
        <button type="button" onClick={this.props.cancelHandler}>Cancel</button>
      </div>
    )
  }

}
