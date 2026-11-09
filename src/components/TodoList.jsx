import { useState } from 'react'

const initialTodos = [
  { id: 1, text: 'Learn React', done: true },
  { id: 2, text: 'Build a sample app', done: false },
]

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos)
  const [text, setText] = useState('')

  function addTodo(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos((prev) => [...prev, { id: Date.now(), text: trimmed, done: false }])
    setText('')
  }

  function toggleTodo(id) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const remaining = todos.filter((t) => !t.done).length

  return (
    <section className="card" data-testid="todo-list">
      <h2>Todos</h2>
      <form className="row" onSubmit={addTodo}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs doing?"
          aria-label="New todo"
          data-testid="todo-input"
        />
        <button type="submit" data-testid="todo-add">Add</button>
      </form>
      {todos.length === 0 ? (
        <p className="muted">Nothing to do. 🎉</p>
      ) : (
        <ul className="todos">
          {todos.map((todo) => (
            <li key={todo.id} className={todo.done ? 'done' : ''}>
              <label>
                <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} />
                <span>{todo.text}</span>
              </label>
              <button className="link" onClick={() => deleteTodo(todo.id)} aria-label={`Delete ${todo.text}`}>
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="muted" data-testid="todo-remaining">
        {remaining} of {todos.length} remaining
      </p>
    </section>
  )
}
