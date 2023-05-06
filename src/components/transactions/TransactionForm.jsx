import { useState } from "react";
import { useGlobalState } from "../../hooks/useGlobalState";
let INITIAL_STATE_TRANSACTION = {
  description: "",
  amount: 0,
};
export const TransactionForm = () => {
  const [transaction, setTransaction] = useState(INITIAL_STATE_TRANSACTION);

  const GLOBAL_CONTEXT = useGlobalState();
  const { addTransaction } = GLOBAL_CONTEXT;

  const setDataTransaction = (event) => {
    let propName = event.target.name;
    let value = event.target.value;
    setTransaction({
      ...transaction,
      [propName]: value,
    });
  };

  const submitTransaction = (e) => {
    e.preventDefault();
    addTransaction(transaction);
  };

  return (
    <div>
      <form onSubmit={submitTransaction}>
        <input
          type="text"
          onChange={setDataTransaction}
          name="description"
          placeholder="ingresa una descripción"
        />
        <input
          type="number"
          onChange={setDataTransaction}
          name="amount"
          placeholder="0.0"
          step="0.01"
        />
        <button>Añadir</button>
      </form>
    </div>
  );
};
