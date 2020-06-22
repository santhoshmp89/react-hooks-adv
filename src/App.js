import React, { useState, useReducer, useMemo } from "react";
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
import UseReducerCounter from "./components/UseReducerCounter";
import CustomeHooks1 from "./components/CustomHooks1";
import { CounterContext } from "./components/OldContextAPI";
import { UseContextAndUseReducer } from "./components/UseContextAndUseReducer";
import ReactMemo from "./components/ReactMemo";
import UseMemo from "./components/UseMemo";

import {
  NameContext,
  ThemeContext,
  theme as Theme
} from "./components/OldContextAPI";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;

    case "Decrement":
      return state - 1;

    case "Reset":
      return 0;

    default:
      return state;
  }
};

export default function App() {
  const [theme, setTheme] = useState(true);
  const color = theme === true ? "white" : "#87CEEB";
  const [counter, dispatch] = useReducer(reducer, initialState);
  const themeValue = {
    theme,
    setTheme
  };

  const counterValue = {
    value: counter,
    dispatch: dispatch
  };

  return (
    <Theme.Provider value={themeValue}>
      <div style={{ backgroundColor: color }}>
        <NameContext.Provider value="Santhosh Kumar">
          <ThemeContext.Provider value="dark">
            <CounterContext.Provider value={counterValue}>
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
                <hr />
                <br />
                <UseReducerCounter />
                <hr />
                <br />
                <CustomeHooks1 />
                <hr />
                <br />
                <UseContextAndUseReducer />
                <hr />
                <br />
                <ReactMemo />
                <hr />
                <br />
                <UseMemo />
              </div>
            </CounterContext.Provider>
          </ThemeContext.Provider>
        </NameContext.Provider>
      </div>
    </Theme.Provider>
  );
}
