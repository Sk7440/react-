import { useEffect, useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(() => {
    let data = localStorage.getItem('countValue') || 0
    return Number(data)
  })
  function increment() {
    setCount(count + 1)


  }
  function decrement() {
    setCount(count - 1)


  }
  function reset() {
    setCount(0)
  }


  useEffect(() => {
    localStorage.setItem('countValue', count)
  }, [count])

  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => { increment() }}>increment</button>
      <button onClick={() => { decrement() }}>decrement</button>
      <button onClick={() => { reset() }}>reset</button>
    </>
  )
}