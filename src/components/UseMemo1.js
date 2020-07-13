import React, { useState } from "react";
import List from "./List";

const UseMemo1 = () => {
  const [input, setInput] = useState("");
  const list = React.useMemo(() => {
    return ["Apple", "Banana", "Cat"];
  }, []);
  return (
    <div>
      <h1>UseMemo1 - react.useMemo</h1>
      <br />
      <input value={input} onChange={e => setInput(e.target.value)} />
      <List list={list} />
    </div>
  );
};

export default UseMemo1;
