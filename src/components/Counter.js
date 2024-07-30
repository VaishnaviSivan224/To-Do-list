import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [count,setCount]= useState(0)

  useEffect(()=>{
    console.log("mounting...");
  },[])

  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
  <h4>Hello iam vaishnavi {count}</h4>
   

   
    </div>
  )
}

export default Counter
