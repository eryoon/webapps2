import React from "react";
import { render } from "react-dom";
import Message from "./components/Message";
import VisualStory from "./components/VisualStory";

class App extends React.Component {

  render() {
  /*  const message = [
      "the first little piggy built a straw house.",
    "The second little piggy built a wood house.",
    "The third little piggy built a brick house."
  ];*/

  const message = [
    {
      "body": "The first little piggy built a straw house.",
      "image": "http://previews.123rf.com/images/alhovik/alhovik1202/alhovik120200016/12345628-Colorful-drinking-straws-Stock-Vector-straw-drinking-juice.jpg"
    },
    {
      "body": "The second little piggy built a wood house.",
      "image": "https://totallywould.files.wordpress.com/2011/03/cropped-would2.jpg"
    },
    {
      "body": "The third little piggy built a brick house.",
      "image": "http://kognitio.com/wp-content/uploads/2014/10/lego.jpg"
    },
    {
      "body": "And they all got blown up by the hungry hungry wolf.",
      "image": "http://web.stanford.edu/dept/CTL/cgi-bin/academicskillscoaching/wp-content/uploads/2014/02/Oh-no1.jpg"
    }
  ];


    const newM = message.map((n) => {
      return (
        <VisualStory imgsrc={n.image}><Message message={n.body} /></VisualStory>
        //<Message message={n} />

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
