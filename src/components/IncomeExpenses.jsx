import { useGlobalState } from "../hooks/useGlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useGlobalState();
  let amounts = transactions.map((transaction) => parseInt(transaction.amount));

  let income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => acc + item, 0);

  let expense =
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, item) => acc + item, 0) * -1;

  return (
    <section>
      <div>
        <h4>Ingresos</h4>
        <p>{income}</p>
      </div>
      <div>
        <h4>Gastos</h4>
        <p>{expense}</p>
      </div>
    </section>
  );
};
