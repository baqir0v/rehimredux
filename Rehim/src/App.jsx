import { useState } from 'react'
import './App.css'
import Counter from './counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter></Counter>
    </>
  )
}

export default App
