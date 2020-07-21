import React, { useContext } from "react";
import { ListsContext } from "./UseListContext";

const Lists = () => {
  const list = useContext(ListsContext);
  const handleClick = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      list.getLists({
        type: "GET_LIST_SUCCESS",
        payload: data
      });
    } catch {
      list.getLists({ type: "GET_LIST_ERROR" });
    }
  };

  console.log(list);
  return (
    <div>
      <p>Lists component:</p>
      <button onClick={() => handleClick()}>Get Data</button>
      {list.value.isLoading && <p>Loading</p>}

      <ul>
        {list.value.data.length > 0 &&
          list.value.data.map(v => {
            return <li key={v.name}>{v.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default Lists;
