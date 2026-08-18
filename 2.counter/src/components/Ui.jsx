

import { useState } from "react";
function Ui() {
   const [count, setCount] = useState(0)
  function increment() {
    if(count>=10){
    alert("10 sy agy na ja")
  }
  else{

    setCount(count+1)
  }
}
function decrement(){
  if(count<=0){
alert("bs krja bhai")
setCount(0)
}
else{

    setCount(count -1)
  }
}
function reset() {
  setCount(0)
}
     return (

<>

    <h1>{count}</h1>
 <button onClick={increment} >increment</button>
 <button onClick={decrement} >decrement</button>
 <button onClick={reset} >reset</button>
 </>
 
  )
}
export default Ui