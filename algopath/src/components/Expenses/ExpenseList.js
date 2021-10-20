import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
function ExpenseList({ expenses }) {
  let expensesContent = <div>Empty</div>;

  if (expenses.length > 0) {
    expensesContent = (
      <Card className="expense">
        {expenses.map((expense) => (
          <ExpenseItem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
      </Card>
    );
  }
  return <div>
      {expensesContent}
  </div>;
}

export default ExpenseList;
