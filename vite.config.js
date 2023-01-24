// We add the react plugin to Vite and we set our root directory to be our src directory. Generally your root is going to be where-ever you keep your index.html. Many projects will just keep the index.html file in the root of the project for this reason. I consider it a source file, so I keep it in src.

// By default, Vite will find the index.html file in where-ever the root is and treat it as the head of a source graph. It'll crawl all your HTML, CSS, and JavaScript you link to from there and create your project for you. We don't have to do any more configuration than that. Vite will take care of the rest.

// if using webpack, make sure to seperate node enviroment for developemnt and production (in webpack we make seperate config files for prod and dev)
// dev version of react is 4 times bigger than prod version !!!


import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
      plugins: [react()],
      root: "src",
      
    });