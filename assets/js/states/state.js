import React, { createContext, useContext, useReducer } from "react";

export default function createStateContext(reducer, initialState) {
  const StateContext = createContext([initialState, () => null]);
  const StateProvider = ({ children }) => {
    const stateContext = useReducer(reducer, initialState);

    return (
      <StateContext.Provider value={stateContext}>
        {children}
      </StateContext.Provider>
    );
  };
  const useStateValue = () => useContext(StateContext);

  return { useStateValue, StateProvider, StateContext };
}
