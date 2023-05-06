import { useGlobalState } from "../hooks/useGlobalState";

export const Balance = () => {
  const { transactions } = useGlobalState();

  let totalAmounts = transactions
    .map((transaction) => parseInt(transaction.amount))
    .reduce((a, b) => a + b, 0);
  console.log(totalAmounts);
  return (
    <section>
      <h2>Your Balance</h2>
      <h4>Total: ${totalAmounts} </h4>
    </section>
  );
};
