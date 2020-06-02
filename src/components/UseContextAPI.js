import React, { useContext } from "react";
import { NameContext, ThemeContext, theme as Theme } from "./OldContextAPI";

const UseContextAPI = () => {
  const nameContext = useContext(NameContext);
  const themeContext = useContext(ThemeContext);
  const themeValue = useContext(Theme);

  return (
    <div>
      <h1>useContext - UseContextButton</h1>
      <h2>
        Name: {nameContext} and theme : {themeContext}
      </h2>
      <button onClick={() => themeValue.setTheme(!themeValue.theme)}>
        Change Background Color
      </button>
    </div>
  );
};

export default UseContextAPI;
