import React from "react";
import useDocTitle from "./useDocTitle";

const DocTitle = () => {
  const [count, setCount] = useDocTitle();
  return (
    <div>
      <h2>DocTitle : Count Number: {count} </h2>
      <button onClick={() => setCount(count + 1)}> Increment</button>
    </div>
  );
};

export default DocTitle;
