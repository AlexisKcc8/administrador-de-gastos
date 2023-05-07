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
    <section className="row text-center">
      <div className="col-6 ">
        <h4 className="fs-5">Ingresos</h4>
        <p style={{ color: "#3d3a53" }}>${income}</p>
      </div>
      <div className="col-6  ">
        <h4 className="fs-5">Gastos</h4>
        <p style={{ color: "#3d3a53" }}>${expense}</p>
      </div>
    </section>
  );
};
