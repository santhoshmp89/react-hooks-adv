import React, { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);
  return (
    <div>
      <h4>Counter: {count}</h4>
      <button onClick={() => setCounter(prevCount => prevCount + 1)}>
        Add
      </button>
    </div>
  );
};

export default Counter;
