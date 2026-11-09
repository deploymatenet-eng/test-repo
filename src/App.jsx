import Counter from './components/Counter.jsx'
import TodoList from './components/TodoList.jsx'

export default function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>React Sample App</h1>
        <p>A minimal Vite + React starter with a couple of interactive demos.</p>
      </header>
      <div className="grid">
        <Counter />
        <TodoList />
      </div>
    </main>
  )
}
