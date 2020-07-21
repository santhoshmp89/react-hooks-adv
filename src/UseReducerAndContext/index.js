import React, { useReducer } from "react";
import Lists from "./List";

import { ListsContext } from "./UseListContext";

const initialState = {
  isLoading: true,
  data: [],
  error: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_LIST_SUCCESS":
      return { ...state, data: action.payload, isLoading: false };
    case "GET_LIST_ERROR":
      return { ...state, data: [], isLoading: false, error: true };
    default:
      return state;
  }
};

const UseReducerAndContext = () => {
  const [lists, dispatch] = useReducer(reducer, initialState);
  return (
    <ListsContext.Provider
      value={{
        value: lists,
        getLists: dispatch
      }}
    >
      <div>
        <h2> React useReducer with useContext</h2>
        <br />
        <Lists />
      </div>
    </ListsContext.Provider>
  );
};

export default UseReducerAndContext;
