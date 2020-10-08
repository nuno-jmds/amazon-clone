//setup data layer
//we need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

//This is the data layer
export const StateContect = createContext();

//Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContect.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContect.Provider>
);

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContect);
