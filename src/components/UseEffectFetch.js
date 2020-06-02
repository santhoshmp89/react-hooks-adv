import React, { useState, useEffect } from "react";

const UseEffectFetch = () => {
  const [input, setInput] = useState(1);
  const [post, setPost] = useState({});

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${input}`)
  //     .then(res => res.json())
  //     .then(res => setPost);
  // });

  const handleGetData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${input}`)
      .then(res => res.json())
      .then(res => setPost);
  };

  return (
    <div>
      <h1>UseEffectFetch</h1>

      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleGetData}>Get Data</button>
    </div>
  );
};

export default UseEffectFetch;
