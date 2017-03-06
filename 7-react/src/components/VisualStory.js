import React from "react";

function getRandomColor() {//http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript?
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default class VisualStory extends React.Component {

  render() {
    const styles = {
      width: "50vw",
      margin: 0,
      padding: 0,
      display: "inline-block"
    }
    const imgstyle = {
      width: "40vw",
      margin: 0,
      padding: 0,
      display: "inline"
    }
    const divstyle = {
      backgroundColor: getRandomColor()
    }
    return (
      <div style={divstyle}>
      <img src={this.props.imgsrc} style={imgstyle} />
      <div style={styles}>{this.props.children}</div>
      </div>
    );
  }
}
