# test-repo

A minimal React sample app built with [Vite](https://vitejs.dev/) and React 18.

It includes two small interactive demos: a counter and a todo list.

## Getting started

```bash
npm install
npm run dev      # start the dev server on http://localhost:5173
npm run build    # build for production into dist/
npm run preview  # serve the production build locally
```

## Project structure

```
index.html              # HTML entry point
vite.config.js          # Vite config (React plugin, dev server on 0.0.0.0:5173)
src/
  main.jsx              # React root
  App.jsx               # App layout
  index.css             # Global styles
  components/
    Counter.jsx         # Counter demo
    TodoList.jsx        # Todo list demo (add, toggle, delete)
```
