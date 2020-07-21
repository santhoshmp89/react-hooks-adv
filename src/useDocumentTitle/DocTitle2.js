import React from "react";
import useDocTitle from "./useDocTitle";

const DocTitle2 = () => {
  const [count2, setCount2] = useDocTitle();
  return (
    <div>
      <h2>DocTitle : Count Number: {count2} </h2>
      <button onClick={() => setCount2(count2 + 1)}> Increment</button>
    </div>
  );
};

export default DocTitle2;
