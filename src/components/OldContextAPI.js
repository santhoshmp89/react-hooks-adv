import React from "react";

export const NameContext = React.createContext("santhosh");

export const ThemeContext = React.createContext("light");

export const theme = React.createContext({
  theme: "light",
  setTheme: () => {}
});

export const CounterContext = React.createContext("dsd");

NameContext.displayName = "NameContext";
ThemeContext.displayName = "ThemeContext";
