import { useGlobalState } from "../hooks/useGlobalState";

export const Balance = () => {
  const { transactions } = useGlobalState();

  let totalAmounts = transactions
    .map((transaction) => parseInt(transaction.amount))
    .reduce((a, b) => a + b, 0);

  return (
    <section>
      <h2 className="text-center fw-bold fs-5" style={{ color: "#9463fd" }}>
        Tu Balance
      </h2>
      <h4 className="text-center fw-bold fs-3">Total: ${totalAmounts} </h4>
    </section>
  );
};
