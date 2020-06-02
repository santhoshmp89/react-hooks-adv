import React, { useState, useEffect } from "react";

const UseEffectCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let setTimeout = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(setTimeout);
    };
  }, []);
  return (
    <div>
      <h1>UseEffectCounter</h1>
      <h5>Count: {count}</h5>
    </div>
  );
};

export default UseEffectCounter;
