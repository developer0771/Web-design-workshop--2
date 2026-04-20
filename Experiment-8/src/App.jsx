import React, { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  };

  const decrement = () => {
    setCount(count - 1)
  };

  const reset = () => {
    setCount(0)
  };

  return (
    <div className="container">
      <div className="card">
        <h1>React Counter<br />Application</h1>
        <p className="counter">{count}</p>
        <div className="buttons">
          <button onClick={increment} className="btn">Increment (+)</button>
          <button onClick={decrement} className="btn">Decrement (-)</button>
        </div>
        <div className="reset-row">
          <button onClick={reset} className="btn">Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
