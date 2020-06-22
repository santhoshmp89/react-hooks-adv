import React from "react";

const Counter = props => {
  console.log("Counter component re-render");
  return (
    <div>
      <p>Counter Component</p>
      <p>Count value: {props.value}</p>
    </div>
  );
};

export default Counter;
