# react_fm

- we basically recreated the create-react-app tool from scracth
- useful for knowing there is no real magic going on an dfort knowing our tools.

## the project

- we built controlled form - we're using hooks to control each part of the form. (not the best practice in this case)
- GOOD FOR: dynamic validation, reacting to a user typing...
- usually we would use uncontrolled form and just get the data from the form after submit event.

## comments:

- .prettierrc - we use prettier only if project has prettier config so we dont format code we shouldn't!
- npm lint - --quiet flag because otherwise we get a lot of info.
- what does jsx do? It's just translating our HTML tags into React.createElement calls. Nothing else.

- useEffect - happens outside of lifecycle of our component. - often used for API calls (web, local storage...) -
- breaking components - In general there are two reasons to break a component into smaller components:
  reusability and organization. When you want to use the same component in multiple places (a button, a tool tip, etc.) then it's helpful to have one component to maintain, test, use ...
- balance it - don't try to break everythuing to smallest possible component because it affects performance and gets harder to track.
- virtual DOM - fast - makes represantation of the real DOM and then updates only parts that changed
- react dev tools - very useful for debugging.