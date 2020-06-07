import { useEffect, useState } from "react";

const UseCustomHooksCounter = () => {
  const [count, setCounter] = useState(0);
  const setIncrement = () => {
    setCounter(count + 1);
  };
  const setDecrement = () => {
    setCounter(count - 1);
  };

  useEffect(() => {
    document.title = `Counter = ${count}`;
  }, [count]);

  return {
    count,
    setIncrement,
    setDecrement
  };
};

export default UseCustomHooksCounter;
