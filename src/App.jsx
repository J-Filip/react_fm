// TODO: better code organization.

// magic of react - making components and then components made out of other components.
// power of reusability.
// component - reusable part of the ui, a JS functions that you can sprinkle with markup.
// flow of data very explicit - one way data flow  from parent to child (for the most part).
// simply passing state to children using props - variables that a parent passes to its children!

// * I like using named exports for better maintainability and auto importing options in editors.

import React from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchParams } from "./SearchParams";
import { ControlledSearchParams } from "./ControlledSearchParams";
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
  return (
    
    // router and query client provider are just wrappers - they provide context to their children and they dont display anything!
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </BrowserRouter>
  );
};
let container = document.getElementById("root");

// Then we take that element (which we called container) and pass that into ReactDOM.createRoot. This is how we signal to React where we want it to render our app.
let root = createRoot(container);

root.render(<App />);
