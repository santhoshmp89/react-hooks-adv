import React, { useState, useEffect } from "react";

const useEffect1 = () => {
  const [count, setCounter] = useState(0);

  useEffect(() => {
    document.title = `${count} times`;
    console.log("SETSATE rerender");
  }, [count]);

  return (
    <div>
      <h1>UseEffect 1</h1>
      <br />
      <button onClick={() => setCounter(count + 1)}>Click me {count}</button>
    </div>
  );
};

export default useEffect1;
