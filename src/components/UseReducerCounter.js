import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;

    case "Decrement":
      return state - 1;

    case "Reset":
      return 0;

    default:
      return state;
  }
};

const UseReducerCounter = () => {
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1> useReducer Counter - UseReducerCounter</h1>
      <br />
      <p>Counter - {counter}</p>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </div>
  );
};

export default UseReducerCounter;
