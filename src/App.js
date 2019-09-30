import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "This is it")
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
