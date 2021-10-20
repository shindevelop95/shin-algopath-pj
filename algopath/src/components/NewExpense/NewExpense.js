import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense({ addExpenseHandler }) {
  const [flag, setFlag] = useState(false);
  const saveExpenseeDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);

    addExpenseHandler(expenseData);
  };

  let formOutput = <button onClick={() => setFlag(!flag)}>Add expense</button>;

  if (flag === true) {
    formOutput = (
      <ExpenseForm
        flag={flag}
        setFlag={setFlag}
        onSaveExpenseData={saveExpenseeDataHandler}
      />
    );
  }
  return <div className="new-expense">{formOutput}</div>;
}

export default NewExpense;
