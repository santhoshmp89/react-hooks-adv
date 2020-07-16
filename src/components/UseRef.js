import React, { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    counterRef.current = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => {
      clearInterval(counterRef.current);
    };
  }, [counter]);

  return (
    <div>
      <h1>UseRef - react.useRef</h1>
      <br />
      Counter: {counter}
      <button onClick={() => clearInterval(counterRef.current)}>
        Clear Timer
      </button>
    </div>
  );
};

export default UseRef;
