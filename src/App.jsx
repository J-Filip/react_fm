// TODO: better code organization.

// magic of react - making components and then components made out of other components.
// power of reusability.
// component - reusable part of the ui, a JS functions that you can sprinkle with markup.
// flow of data very explicit - one way data flow  from parent to child (for the most part).
// simply passing state to children using props - variables that a parent passes to its children!

// * I like using named exports for better maintainability and auto importing options in editors.

import React from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { SearchParams } from "./SearchParams";
import { ControlledSearchParams } from "./ControlledSearchParams";
import { AdoptedPetContext } from "./AdoptedPetContext";
import { DetailsErrorBoundary as Details } from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // TODO: complicated topic, have to come back to this.
      // we set it up so we fetch i t once and never again.
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  // we are passing an entire hook as a value so we can use it's state and fucntion to change state in other components.
  const adoptedPet = useState(null);

  return (
    <div className=" m-0 bg-violet-800 p-0">
      {/* router and query client provider are just wrappers - they provide context to their children and they dont display anything! */}
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          {/* You have to wrap your app in a Provider. This is the mechanism by which React will notify the higher components to re-render whenever our context changes. Then whatever you pass into the value prop (we passed in the complete hook, the value and updater pair) will exit on the other side whenever we ask for it. */}
          <AdoptedPetContext.Provider value={adoptedPet}>
            <Link to="/">
              <header>
                <h1>Adopt Me</h1>
              </header>
            </Link>
            <Routes>
              <Route path="/controlled" element={<ControlledSearchParams />} />
              <Route path="/" element={<SearchParams />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};
let container = document.getElementById("root");

// Then we take that element (which we called container) and pass that into ReactDOM.createRoot. This is how we signal to React where we want it to render our app.
let root = createRoot(container);

root.render(<App />);
