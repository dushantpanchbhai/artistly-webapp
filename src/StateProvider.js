//setup data layer 
// we need this to track the basket data

import React,{createContext,useContext,useReducer} from 'react';

export const StateContext  = createContext();

//Build Provider 
export const StateProvider = ({reducer,initialState,children}) =>
(
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);