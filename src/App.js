import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { that: 'Hello World!' }

  render() {
    return (
      <div>
        <span>{this.state.that}</span>
      </div>
    )
  }

};

ReactDOM.render(<App />, document.getElementById("root"));
