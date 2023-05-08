import { GlobalStateProvider } from "./context/GlobalState";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { TransactionForm } from "./components/transactions/TransactionForm";
import { TransactionList } from "./components/transactions/TransactionList";
import { IncomeExpenses } from "./components/IncomeExpenses";

import "./App.css";
import { ExpenseChart } from "./components/ExpenseChart";
function App() {
  return (
    <GlobalStateProvider>
      <section className="container ">
        <article className="row">
          <div className="col-12 pt-3 col-md-4">
            <Header />
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>
          <div className="col-12 pt-3 col-md-8 d-flex flex-column justify-content-center align-items-center pb-4">
            <div className="row p-0 ">
              <div className="col-12">
                <ExpenseChart />
              </div>
            </div>
            <div className="row p-0  w-100">
              <div className="col-12">
                <TransactionList />
              </div>
            </div>
          </div>
        </article>
      </section>
    </GlobalStateProvider>
  );
}

export default App;
