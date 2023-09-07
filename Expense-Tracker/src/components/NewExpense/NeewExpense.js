import React from 'react';

import EexpenseForm from './EexpenseForm';
import './NewExpense.css';

const NeewExpense = (props) => {
  const saveExpenseDataHandler= (enteredExpenseData)=>{
    const expenseData={
      id:Math.random().toString(),
      ...enteredExpenseData,
      
    }
    props.onAddExpense(expenseData);
  }
  return (
    <div className='new-expense'>
      <EexpenseForm onSaveExpenseData ={saveExpenseDataHandler}/>
    </div>
  );
};

export default NeewExpense;