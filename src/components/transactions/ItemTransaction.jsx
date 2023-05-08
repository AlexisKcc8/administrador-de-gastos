import { useGlobalState } from "../../hooks/useGlobalState";

export const ItemTransaction = (props) => {
  const { transaction } = props;
  const { deleteTransaction } = useGlobalState();
  return (
    <div
      className="border rounded  d-flex justify-content-between align-items-center p-2 mb-2 text-dark"
      style={
        transaction.amount < 0
          ? { backgroundColor: "#f9efff", color: "#000" }
          : { backgroundColor: "#d076ff" }
      }
    >
      <p className="fw-bold m-0 ">{transaction.description}</p>
      <div className=" h-100 d-flex align-items-center ">
        <span className="fw-bold me-3">${transaction.amount}</span>
        <button
          className="btn  bw-bold border"
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};
