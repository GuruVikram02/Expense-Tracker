import React,{ useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";


function ExpenseItem(props) {
  const[title,setTitle]=useState(props.title);
  const clickHandler=()=> {
    const newTitle=prompt("Enter the new Title")
    if(newTitle){
      setTitle(newTitle);
    }
    else{
      setTitle("change-title");
    }
    
    // console.log(props.title);
  };
  
  return (
    <li className="expense-item">
      <ExpenseDate date={props.date} />
 
      {/* <div>{props.date.toDateString()}</div> */}
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>
        Change Title
      </button>
    </li>
  );
}

export default ExpenseItem;
