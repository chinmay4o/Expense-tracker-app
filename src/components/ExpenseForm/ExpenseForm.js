import { useState } from "react";
import "./expenseform.css";

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangeHandler(e) {
    setEnteredTitle(e.target.value);
  }
  function amountChangeHandler(e) {
    setEnteredAmount(e.target.value);
  }
  function dateChangeHandler(e) {
    setEnteredDate(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    console.log(expenseData);
    setEnteredTitle(" ".trim());
    setEnteredAmount(" ".trim());
    setEnteredDate(" ".trim());
  }

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense_controls">
          <div className="new-expense_control">
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
              required
            />
          </div>
          <div className="new-expense_control">
            <label htmlFor="Amount">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
              // required
            />
          </div>
          <div className="new-expense_control">
            <label htmlFor="">Date</label>
            <input
              type="date"
              min="2019-05-01"
              max="2024-01-05"
              onChange={dateChangeHandler}
              value={enteredDate}
              required
            />
          </div>
        </div>
        <div className="new-expense_actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
