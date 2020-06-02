import React, { useState } from "react";
import "./styles.css";
import Counter from "./components/Counter";
import HookExThree from "./components/HookExThree";
import UseEffect1 from "./components/UseEffect1";
import UseStateCallBack from "./components/UseStateCallback";
import CleanUpUseEffect from "./components/CleanUpUseEffect";
import UseEffectCounter from "./components/UseEffectCounter";
import UseEffectFetch from "./components/UseEffectFetch";
import OldContextAPI1 from "./components/OldContextAPI1";
import OldContextButton from "./components/OldContextButton";
import UseContextAPI from "./components/UseContextAPI";

import {
  NameContext,
  ThemeContext,
  theme as Theme
} from "./components/OldContextAPI";

export default function App() {
  const [theme, setTheme] = useState(true);
  const color = theme === true ? "white" : "#87CEEB";
  const themeValue = {
    theme,
    setTheme
  };
  return (
    <Theme.Provider value={themeValue}>
      <div style={{ backgroundColor: color }}>
        <NameContext.Provider value="Santhosh Kumar">
          <ThemeContext.Provider value="dark">
            <div className="App">
              <h1>React Hooks Advance</h1>
              <h2>Start editing to see some magic happen!</h2>
              <hr />
              <br />
              <Counter />
              <hr />
              <br />
              <HookExThree />
              <hr />
              <br />
              <UseEffect1 />
              <hr />
              <br />
              <UseStateCallBack />
              <hr />
              <br />
              <CleanUpUseEffect />
              <hr />
              <br />
              <UseEffectCounter />
              <hr />
              <br />
              <UseEffectFetch />
              <hr />
              <br />
              <OldContextAPI1 />
              <OldContextButton />
              <hr />
              <br />
              <UseContextAPI />
            </div>
          </ThemeContext.Provider>
        </NameContext.Provider>
      </div>
    </Theme.Provider>
  );
}
