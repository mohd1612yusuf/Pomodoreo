import React,{useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0);
    function handleIncrement(){
        setCount(count+1);
    }
    function handleDecrement(){
        {count>0 ? setCount(count-1) : setCount(0)}
    }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter
