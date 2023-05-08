import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../hooks/useGlobalState";

export const ExpenseChart = () => {
  const { transactions } = useGlobalState();
  let expensesPercentage = 0;
  let incomesPercentage = 0;
  const totalIncomes = transactions
    .filter((transaction) => parseInt(transaction.amount) > 0)
    .reduce((acc, transaction) => (acc += parseInt(transaction.amount)), 0);

  const totalExpenses =
    transactions
      .filter((transaction) => parseInt(transaction.amount) < 0)
      .reduce((acc, transaction) => (acc += parseInt(transaction.amount)), 0) *
    -1;

  if (totalIncomes == 0) {
    expensesPercentage = 100;
    incomesPercentage = 0;
  } else {
    expensesPercentage = Math.round((totalExpenses / totalIncomes) * 100);
    incomesPercentage = 100 - expensesPercentage;
  }

  if (totalIncomes === 0 && totalExpenses === 0) {
    return (
      <div className="container">
        <div className="row">
          <h2
            className="fw-bold"
            style={{ color: "#d076ff", fontSize: "3rem" }}
          >
            No hay datos todavia
          </h2>
        </div>
      </div>
    );
  }

  return (
    <section
      className="px-2 w-100"
      style={{
        minHeight: "15rem",
        maxHeight: "20rem",
      }}
    >
      <VictoryPie
        colorScale={["#f9efff", "#d076ff"]}
        data={[
          { x: "Gastos", y: expensesPercentage },
          { x: "Ingresos", y: incomesPercentage },
        ]}
        animate={{
          duration: 200,
        }}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={<VictoryLabel angle={0} style={{ fill: "#000" }} />}
      />
    </section>
  );
};
