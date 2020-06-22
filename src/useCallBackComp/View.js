import React, { memo } from "react";

const View = memo(props => {
  console.log("View component re-render");
  return (
    <div>
      <p>View Component</p>
    </div>
  );
});

export default View;
