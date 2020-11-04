import React, { createContext, useContext, useReducer } from 'react';

/**
 * for preparing data layer
 */
export const StateContext = createContext();
console.log(StateContext);

/**
 * this is the Higher order components
 * To wrap the App in StateProvider and provide the data layer functionality
 * 
 * @param {*} param0 
 */
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        { children }    
    </StateContext.Provider>
);

/**
 * use this useStateValue  to pull something from data layer
 */
export const useStateValue = () => useContext(StateContext);