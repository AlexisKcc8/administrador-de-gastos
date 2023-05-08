import { useState } from "react";
import { useGlobalState } from "../../hooks/useGlobalState";
import { useRef } from "react";
let INITIAL_STATE_TRANSACTION = {
  description: "",
  amount: "",
};
export const TransactionForm = () => {
  const [transaction, setTransaction] = useState(INITIAL_STATE_TRANSACTION);
  const refInputDescription = useRef();

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
    refInputDescription.current?.focus();
    clearInputsForm();
  };

  const clearInputsForm = () => {
    setTransaction(INITIAL_STATE_TRANSACTION);
  };

  return (
    <div>
      <form onSubmit={submitTransaction}>
        <div className="mb-3">
          <label htmlFor="inputDescription" className="form-label">
            Description
          </label>
          <input
            ref={refInputDescription}
            type="text"
            onChange={setDataTransaction}
            name="description"
            value={transaction.description}
            className="form-control"
            aria-describedby="descriptionHelp"
            id="inputDescription"
            placeholder="Ejem: Pago de agua potable..."
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputAmount" className="form-label">
            Monto
          </label>
          <input
            type="number"
            onChange={setDataTransaction}
            name="amount"
            value={transaction.amount}
            placeholder="0.0"
            step="0.01"
            className="form-control"
            id="inputAmount"
            required
          />
        </div>

        <button
          type="submit"
          className="btn fw-bold text-white"
          style={{ backgroundColor: "#3d3a53" }}
        >
          Añadir
        </button>
      </form>
    </div>
  );
};
