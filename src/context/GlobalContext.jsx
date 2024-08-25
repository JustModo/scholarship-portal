import React, { createContext, useReducer } from "react";

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const initialState = {
  user: localStorage.getItem("USER") || null,
  language: "en",
};

function globalReducer(state, payload) {
  const newState = { ...state };

  Object.keys(payload).forEach((key) => {
    if (key in state) {
      newState[key] = payload[key];
    }
  });

  return newState;
}

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
