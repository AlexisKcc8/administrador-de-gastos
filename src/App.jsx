import { GlobalStateProvider } from "./context/GlobalState";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { TransactionForm } from "./components/transactions/TransactionForm";
import { TransactionList } from "./components/transactions/TransactionList";
import { IncomeExpenses } from "./components/IncomeExpenses";

import "./App.css";
function App() {
  return (
    <GlobalStateProvider>
      <section className="container border">
        <article className="row">
          <div className="col-12 pt-3 col-md-4">
            <Header />
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>
          <div className="col-12 pt-3 col-md-8">
            <TransactionList />
          </div>
        </article>
      </section>
    </GlobalStateProvider>
  );
}

export default App;
