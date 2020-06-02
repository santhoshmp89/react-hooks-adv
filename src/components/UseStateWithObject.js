import React, { useState, useEffect } from "react";

const UseStateWithObject = () => {
  const [list, setList] = useState({});
  const prop = Object.entries(list).length;
  return (
    <div>
      <h1>UseStateWithObject</h1>
    </div>
  );
};

export default UseStateWithObject;
