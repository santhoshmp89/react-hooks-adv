import React from "react";
import UseCustomHooks1 from "./UseCustomHooks1";
import UseCustomHooksCounter from "./UseCustomHooksCounter";

const CustomeHooks1 = () => {
  UseCustomHooks1();
  const { count, setIncrement, setDecrement } = UseCustomHooksCounter();
  return (
    <div>
      <h1>Custome hooks - 1</h1>
      <button>Change background color</button>
      <br />
      <br />

      <p>Counter hook = {count}</p>
      <button onClick={setIncrement}>Increment</button>
      <button onClick={setDecrement}>Decrement</button>
    </div>
  );
};

export default CustomeHooks1;
