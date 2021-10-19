import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
function Expense() {
  const expenseArr = [
    {
      id: 0,
      date: new Date("2021", "09", "15"),
      title: "Groceries",
      amount: 152.2,
    },
    {
      id: 1,
      date: new Date("2021", "09", "15"),
      title: "Sport",
      amount: 152.2,
    },
    {
      id: 2,
      date: new Date("2021", "09", "15"),
      title: "Movie",
      amount: 152.2,
    },
    {
      id: 3,
      date: new Date("2021", "09", "15"),
      title: "Lunch",
      amount: 152.2,
    },
  ];
  return (
    <Card className="expense">
      {expenseArr.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expense;
