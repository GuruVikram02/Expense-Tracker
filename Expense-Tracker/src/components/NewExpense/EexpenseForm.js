import React from "react";
import { useState } from "react";

import "./ExpenseForm.css";

const EexpenseForm = (props) => {
  const [show, setShow] = useState(false);
  const [btn, setBtn] = useState(true);
  const clickHandler = () => {
    setShow(true);
    setBtn(false);
  };
  const cancelHandler=()=>{
    setShow(false);
    setBtn(true);
  }
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  const titleHandler = (event) => {
    const enteredTitle = event.target.value;
    console.log(event.target.value);
    setTitle(enteredTitle);
  };
  const amountHandler = (event) => {
    const enteredAmount = event.target.value;
    setAmount(enteredAmount);
  };
  const dateHandler = (event) => {
    const enteredDate = event.target.value;
    setDate(enteredDate);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      {btn && <button onClick={clickHandler}>ADD NEW EXPENSE</button>}
      {show ? (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" value={enteredTitle} onChange={titleHandler} />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountHandler}
                value={enteredAmount}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateHandler}
                value={enteredDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            
            <button type="submit">Add Expense</button>
            <button type="submit" onClick={cancelHandler}>Cancel</button>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default EexpenseForm;
