import React, { useState, useEffect } from "react";
let i = 1;
const HookExThree = () => {
  const [infor, setInfo] = useState({ fname: "", lname: "" });

  useEffect(() => {
    console.log("input have changed", i++);
  }, [infor]);

  return (
    <div>
      <h3>useState with object</h3>
      <input
        type="text"
        onChange={e => setInfo({ ...infor, fname: e.target.value })}
      />
      <input
        type="text"
        onChange={e => setInfo({ ...infor, lname: e.target.value })}
      />
      <br />
      <p>
        Fname: {infor.fname}, Lname: {infor.lname}{" "}
      </p>
    </div>
  );
};

export default HookExThree;
