import React from 'react'

const Counter = ({count,onIncrement,onDecrement}) => {
   console.log("==counter");
  return (
   
      <div>
         <h1>{count}</h1>
         <button onClick={onIncrement}>Increment from header</button>
         <button onClick={onDecrement}>Increment from header</button>
      </div>

  )
}

export default Counter