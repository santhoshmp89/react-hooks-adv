import React, { useState, useEffect } from "react";

const MouseMove = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("updating co-ordinates");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <h3>X-Axis {x}</h3>
      <h3>Y-Axis {y}</h3>
    </div>
  );
};

export default MouseMove;
