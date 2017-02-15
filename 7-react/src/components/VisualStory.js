import React from "react";

export default class VisualStory extends React.Component {

  render() {
    return (
      <div>
      <img src={this.props.imgsrc} style="width: 40vw;" />
      <p style="width: 59vw;">{this.props.children}</p>
      </div>
    );
  }
}
