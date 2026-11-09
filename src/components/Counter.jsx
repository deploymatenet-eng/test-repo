import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section className="card" data-testid="counter">
      <h2>Counter</h2>
      <p className="count" data-testid="count-value">{count}</p>
      <div className="row">
        <button onClick={() => setCount((c) => c - 1)} data-testid="decrement">−</button>
        <button onClick={() => setCount(0)} data-testid="reset">Reset</button>
        <button onClick={() => setCount((c) => c + 1)} data-testid="increment">+</button>
      </div>
    </section>
  )
}
