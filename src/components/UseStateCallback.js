import React, { useState } from "react";

const UseStateCallBack = () => {
  const [count, setCount] = useState(0);
  const increamentFive = () => {
    for (let i = 1; i < 5; i++) {
      setCount(prevCount => prevCount + 1);
    }
  };
  return (
    <div>
      <h2>useStateCallBack accept function</h2>
      <p>Count {count}</p>
      <button onClick={() => increamentFive()}>Increament 5</button>
    </div>
  );
};

export default UseStateCallBack;
