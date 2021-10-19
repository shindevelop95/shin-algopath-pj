import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
  };
  return (
    <div className="App">
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expense />
    </div>
  );
}

export default App;
