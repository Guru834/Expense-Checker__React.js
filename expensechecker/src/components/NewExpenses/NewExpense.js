import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [displayButton, setDisplayButton] = useState(false);
  function saveExpenseDataHandler(newExpense) {
    const expenseData = {
      ...newExpense,
    };
    props.onAddExpense(expenseData);
  }
  function handleButtonClick(event) {
    setDisplayButton(event);
  }
  return (
    <div className="new-expense">
      {displayButton ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onButtonClick={handleButtonClick}
        />
      ) : (
        <button onClick={() => setDisplayButton(!displayButton)}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
