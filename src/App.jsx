// magic of react - making components and then components made out of other components.
// power of reusability.
// component - reusable part of the ui, a JS functions that you can sprinkle with markup.
// flow of data very explicit - one way data flow  from parent to child (for the most part).
// simply passing state to children using props - variables that a parent passes to its children!

// * I like using named exports for better maintainability and auto importing options in editors.

import React from "react";
import { createRoot } from "react-dom/client";
import { SearchParams } from "./SearchParams";

const App = () => {
  return (
    <div>
      <SearchParams />
    </div>
  );
};
let container = document.getElementById("root");

// Then we take that element (which we called container) and pass that into ReactDOM.createRoot. This is how we signal to React where we want it to render our app.
let root = createRoot(container);

root.render(<App />);
