import React from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense({ addExpenseHandler }) {
  const saveExpenseeDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);

    addExpenseHandler(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseeDataHandler} />
    </div>
  );
}

export default NewExpense;
