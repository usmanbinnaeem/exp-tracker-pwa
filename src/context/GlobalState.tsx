import React, { createContext, useReducer } from "react";
import { IState, ITrans } from "../Types/Types";
import AppReducer from "./AppReducer";

//initial State
const initialState: IState = {
  transactions: [],
};

//create context

export const GlobalContext = createContext<IState | any>(initialState);

// provider component

export function GlobalProvider({ children }: any): JSX.Element {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id: ITrans) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }
  function addTransaction(transaction: ITrans) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
