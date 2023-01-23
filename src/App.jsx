// magic of react - making components and then components made out of other components.
// power of reusability.
// component - reusable part of the ui, a JS functions that you can sprinkle with markup.
// flow of data very explicit - one way data flow  from parent to child (for the most part).
// simply passing state to children using props - variables that a parent passes to its children!

import React from "react"
import {createRoot} from 'react-dom'


const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me"),

    React.createElement(Pet, {
      name: "Kira",
      animal: "Dog",
      breed: "Schnauzer",
    }),
    React.createElement(Pet, {
      name: "Lady",
      animal: "Guinea pig",
      breed: "Unknown",
    }),
    React.createElement(Pet, {
      name: "Zeus",
      animal: "Dog",
      breed: "Turkish kangal",
    }),
  ]);
};
let container = document.getElementById("root");

// Then we take that element (which we called container) and pass that into ReactDOM.createRoot. This is how we signal to React where we want it to render our app.
let root = createRoot(container);

root.render(React.createElement(App));
