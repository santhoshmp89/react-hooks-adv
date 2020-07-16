import React from "react";

const List = props => {
  console.log("List component rerendering");
  return (
    <ul>
      {props.list &&
        props.list.map(v => {
          return (
            <li key={v} onClick={() => props.handleClick(v)}>
              {v}
            </li>
          );
        })}
    </ul>
  );
};

export default React.memo(List);
