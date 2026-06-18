import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function CallBack() {
  let [count, setCount]=useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Child onClick={handleClick} />
    </>
  );
}
