import "./App.css";
import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 0,
    date: new Date("2020", "09", "15"),
    title: "Groceries",
    amount: 152.2,
  },
  {
    id: 1,
    date: new Date("2020", "09", "15"),
    title: "Sport",
    amount: 152.2,
  },
  {
    id: 2,
    date: new Date("2022", "09", "15"),
    title: "Movie",
    amount: 152.2,
  },
  {
    id: 3,
    date: new Date("2019", "09", "15"),
    title: "Lunch",
    amount: 152.2,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const filterYearHandler = (year) => {
    console.log(DUMMY_EXPENSES[0].date);
    console.log("received year", year);
    setExpenses(
      DUMMY_EXPENSES.filter((de) => de.date.getFullYear().toString() === year)
    );
  };
  return (
    <div className="App">
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expense filter={filterYearHandler} expenses={expenses} />
    </div>
  );
}

export default App;
