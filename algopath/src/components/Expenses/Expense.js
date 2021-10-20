import React, { useState } from "react";
import ExpenseChart from "./ExpenseChart";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
function Expense({ expenses, filter }) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const expenseHandler = (ep) => {
    setFilteredYear(ep);
  };

  return (
    <div>
      <ExpensesFilter
        filter={filter}
        selected={filteredYear}
        expenseHandler={expenseHandler}
      />
      <ExpenseChart expenses={filter} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default Expense;
