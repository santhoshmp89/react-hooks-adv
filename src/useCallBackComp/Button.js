import React from "react";

const Button = React.memo(props => {
  console.log("Button component re-render");
  return (
    <div>
      <p>Button Component</p>
      <button onClick={props.handleClick}>Button</button>
    </div>
  );
});

export default Button;
