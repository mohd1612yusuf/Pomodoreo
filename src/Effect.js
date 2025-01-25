import { useState } from "react"
import React, { useEffect }from 'react'

export default function Effect() {
    const[count,setCount]=useState(0)
    const[number,setNumber]=useState(1000)
    useEffect(()=>{
        var timer=setInterval(()=>{
            console.log("Abcd")
        },3000)
        return ()=>{
            clearInterval(timer)
        }
    })
  return (
    <div>
      <h1>Hello</h1>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Count increment</button>
      <h1>Number: {number}</h1>
      <button onClick={()=>setNumber(number+1)}>Number increment</button>
    </div>
  )
}
