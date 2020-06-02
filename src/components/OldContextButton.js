import React from "react";
import { theme as Theme } from "./OldContextAPI";

const OldContextButton = props => {
  return (
    <Theme.Consumer>
      {value => {
        return (
          <button onClick={() => value.setTheme(!value.theme)}>
            Toggle Background Color
          </button>
        );
      }}
    </Theme.Consumer>
  );
};

export default OldContextButton;
