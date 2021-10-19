import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem({ date, title, amount }) {
  const [newTitle, setNewTitle] = useState(title);
  const clickHandler = () => {
    console.log("clicked!!");
    setNewTitle("Updated");
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item_description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
