import React, { useEffect, useState } from 'react'

export default function Count() {
    let [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count = count+1);
        }, 1000);
    });
    const increment = () => {
        setCount(count++);
    }
     const decrement = () => {
        setCount(count--);
    }
    const reset = () => {
        setCount(0);
    }
  return (
    <div>
      <h2>{count}...</h2>
      {/* <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>0</button> */}
    </div>
  )
}
