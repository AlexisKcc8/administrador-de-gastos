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
      <h2>Hello wolrd</h2>
      <Header />
      <IncomeExpenses />
      <Balance />
      <TransactionForm />
      <TransactionList />
    </GlobalStateProvider>
  );
}

export default App;
