import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import { ACTIONS_TRANSACTIONS } from "./actions/actionsTransactions";

export const GlobalContext = createContext();
const INITIAL_STATE = {
  transactions: [],
};
export const GlobalStateProvider = (props) => {
  const { children } = props;

  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  const addTransaction = (newTransaction) => {
    const { description, amount } = newTransaction;
    dispatch({
      type: ACTIONS_TRANSACTIONS.ADD_TRANSACTION,
      payload: { id: window.crypto.randomUUID(), description, amount },
    });
  };

  const deleteTransaction = (idTransaction) => {
    dispatch({
      type: ACTIONS_TRANSACTIONS.DELETE_TRANSACTION,
      payload: idTransaction,
    });
  };

  let data = {
    transactions: state.transactions,
    addTransaction,
    deleteTransaction,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
