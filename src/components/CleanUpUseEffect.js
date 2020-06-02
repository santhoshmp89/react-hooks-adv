import React, { useState } from "react";
import MouseMove from "./MouseMove";

const CleanUpUseEffect = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <h1>
        CleanUpUseEffect -{" "}
        <button onClick={() => setDisplay(!display)}>Toggle</button>
      </h1>
      {display && <MouseMove />}
    </div>
  );
};

export default CleanUpUseEffect;
