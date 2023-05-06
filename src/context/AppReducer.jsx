import { ACTIONS_TRANSACTIONS } from "./actions/actionsTransactions";

export const AppReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS_TRANSACTIONS.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, payload],
      };
    case ACTIONS_TRANSACTIONS.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== payload
        ),
      };
    default:
      return state;
  }
};
