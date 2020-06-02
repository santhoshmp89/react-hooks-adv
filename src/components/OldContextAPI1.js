import React from "react";
import { NameContext, ThemeContext } from "./OldContextAPI";

const OldContextAPI1 = () => {
  return (
    <div>
      <h1>Old Context example1</h1>
      <NameContext.Consumer>
        {value => {
          return (
            <ThemeContext.Consumer>
              {theme => {
                return (
                  <h3>
                    {value} and theme is {theme}
                  </h3>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </NameContext.Consumer>
    </div>
  );
};

export default OldContextAPI1;
