import { useState } from "react";

export default function App() {
  // let [stateName, stateFn] = useState(initialValue)
  let [count, setCount] = useState(0)

  function Increment(){
    setCount(count  +1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>
        increment
      </button>

    </>
  );
}
