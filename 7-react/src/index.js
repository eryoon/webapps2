import React from "react";
import { render } from "react-dom";
import Message from "./components/Message";
import VisualStory from "./components/VisualStory";

class App extends React.Component {

  render() {
    const message = [
      "the first little piggy built a straw house.",
    "The second little piggy built a wood house.",
    "The third little piggy built a brick house."
  ];

    const newM = message.map((n) => {
      return (
        <VisualStory imgsrc={"https://i.ytimg.com/vi/CtP83CWOMwc/maxresdefault.jpg"}><Message message={n} /></VisualStory>
      )
    });

    var result = (
      <div>

        <h1>Story Time!</h1>
        {newM}
        </div>
    )


    return result;
  }

}

render(<App />, document.getElementById("root"));
