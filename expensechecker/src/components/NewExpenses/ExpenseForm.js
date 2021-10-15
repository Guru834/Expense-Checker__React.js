import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [eneteredDate, setEnteredDate] = useState("");
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(eneteredDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onButtonClick(false);
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            typ="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            typ="text"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2000/01/01"
            max="2022/12/31"
            onChange={dateChangeHandler}
            value={eneteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={() => props.onButtonClick(false)}>
          Cancel
        </button>
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
