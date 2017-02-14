import React from "react";

export default class Message extends React.Component {

  render() {
    return (
      <h3 className="message">{this.props.message}</h3>
    );
  }
}
