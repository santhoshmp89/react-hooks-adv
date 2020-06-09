import React, { useContext } from "react";
import { CounterContext } from "./OldContextAPI";

export const UseContextAndUseReducer = () => {
  const counter = useContext(CounterContext);
  return (
    <div>
      <h2>UseContextAndUseReducer</h2>
      <p>Counter value: {counter.value}</p>
      <button onClick={() => counter.dispatch("Increment")}>increment</button>
      <button onClick={() => counter.dispatch("Decrement")}>decrement</button>
    </div>
  );
};
