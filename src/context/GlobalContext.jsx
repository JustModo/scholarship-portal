import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useReducer } from "react";
import { auth } from "../firebase";

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const initialState = {
  user: null,
  language: "en",
  loading: true,
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user?.emailVerified) {
        dispatch({ user, loading: false });
      } else {
        dispatch({ user: null, loading: false });
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
