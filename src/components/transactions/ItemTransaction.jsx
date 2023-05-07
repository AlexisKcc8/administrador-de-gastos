import { useGlobalState } from "../../hooks/useGlobalState";

export const ItemTransaction = (props) => {
  const { transaction } = props;
  const { deleteTransaction } = useGlobalState();
  return (
    <div
      className="border rounded  d-flex justify-content-between align-items-center p-2 mb-2 text-white"
      style={{ backgroundColor: "#9463fd" }}
    >
      <p className="fw-bold m-0">{transaction.description}</p>
      <div className=" h-100">
        <span className="fw-bold me-1">${transaction.amount}</span>
        <button
          className="btn  text-white"
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          ✖️
        </button>
      </div>
    </div>
  );
};
