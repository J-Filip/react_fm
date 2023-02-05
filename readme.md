# About the project
- ❌ ~~create-react-app~~
- ✅ Vite - basically recreated the create-react-app tool from scracth
  - useful for knowing there is no real magic going on with our tools.


- we built controlled form - we're using hooks to control each part of the form. (not the best practice in this case)
- GOOD FOR: dynamic validation, reacting to a user typing...
- usually we would use uncontrolled form and just get the data from the form after submit event.

# Learned about:


## Hooks 🎣
-  hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.



### Why hooks?

**1. It’s hard to reuse stateful logic between components**

- React didn't have a great answer to sharing non-visual logic because "React couples UI to a component". This lead to overcomplicated patterns like Higher-order components or Render props.
- With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. 

- custom hook 
  - e.g. fetching some data can be asbstracted and easily resused in diffrenct components.

 **2. Complex components become hard to understand**


- Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods
- useEffect: happens outside of lifecycle of our component. 
  -to manage side-effects like API calls, subscriptions, timers, mutations, and more.

- useState: to manage states. Returns a stateful value and an updater function to update it.

## Libraries 📕

### react router 
- changes drastically between versions.

- by far the most popular client side router

### react/query

- having a lot of effects in our app can get confusing and hard to follow...ADVICE: limit the useEffect in your app or better said, let the library handle it for you!

- basically a standard if app makes any https requests. 

- the idea behind React is that you want to cache most of what you fetch from a database. If you fetch the details of pet ID 1, you generally DO NOT want to fetch it again if a user revisits that page: you'd like to cache it. 
This is what react-query is going to do for you: it's a built in caching layer for these async data stores that works really well within the constraints of React. Let's see how to make our Details page use it.


## Notable mentions 👀


### Class components

- class component were mostly replaced by functional compnents. They are still used, mainly we would find them in older project, so it's good to know how to read/write them.
- we CANNOT use hooks with class components - we would have to crate a higher order function where we e.g. fetch some data and then pass it to a child.
- a higher-order component is a function that takes a component and returns a new component.


### Error boundary

- good article: https://aweary.dev/fault-tolerance-react/

- by default, if your application throws an error during rendering, React will remove its UI from the screen. 
- to prevent this, you can wrap a part of your UI into an error boundary. An error boundary is a special component that lets you display some fallback UI instead of the part that crashed—for example, an error message.
-  we can think of it like a catch block from js try/catch
- most errors come from bad api calls and user generated input.
- ! balance between too many and too few error boundaries!


### Portals 
- separate mount point (the actual DOM node which your app is put into) for your React app. A common use case for this is going to be doing modals. 
- useRef is used to store something in the component “memory” but it doesn’t trigger a new render when the value is updated.






## Extra comments 💬

- .prettierrc - we use prettier only if project has prettier config so we dont format code we shouldn't!
- npm lint - --quiet flag because otherwise we get a lot of info.
- what does jsx do? It's just translating our HTML tags into React.createElement calls. Nothing else.
- breaking components - In general there are two reasons to break a component into smaller components:
  reusability and organization. When you want to use the same component in multiple places (a button, a tool tip, etc.) then it's helpful to have one component to maintain, test, use ...
- balance it - don't try to break everythuing to smallest possible component because it affects performance and gets harder to track.
- virtual DOM - fast - makes represantation of the real DOM and then updates only parts that changed
- react dev tools - very useful for debugging.
- smiješna metoda zvana WET - "Write everything twice" - ne stvarati nepotrebne apstrakcije prerano.


## Improvements and features

- deploy
- dark/light mode
- add tailwind css
- add testing
- add typescript
- hook to a real petfinder API
