import { useGlobalState } from "../../hooks/useGlobalState";
import { ItemTransaction } from "./ItemTransaction";

export const TransactionList = () => {
  const { transactions } = useGlobalState();

  return (
    <div>
      <h2>Historial</h2>
      {transactions.length > 0 ? (
        <div
          style={{
            minHeight: "10rem",
            maxHeight: "18rem",

            overflow: "auto",
          }}
        >
          {transactions.map((transaction) => (
            <ItemTransaction key={transaction.id} transaction={transaction} />
          ))}
        </div>
      ) : (
        <p>Sin datos</p>
      )}
    </div>
  );
};
