import React from 'react';

import './ExpenseForm.css';
import { useState } from 'react';


const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    const titleChangedHandler=(e)=>{
  setEnteredTitle(e.target.value);
//alert(e.target.value);
    };
    const amountChangedHandler =(e) =>{
        setEnteredAmount(e.target.value);
    };
    const dateChangedHandler=(e)=>{
setEnteredDate(e.target.value);
    };
    const formSubmitHandler=(e)=>{
        e.preventDefault();
        const expenseDataObj={
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date (enteredDate)
        }
        if(expenseDataObj.amount && expenseDataObj.amount && expenseDataObj.date !==''){
          props.getDataFromChild(expenseDataObj);
        }
        else{
          alert("Please fill all fields");
        }
        
        //console.log(expenseDataObj);
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
    };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangedHandler} value={enteredTitle} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='1'  onChange={amountChangedHandler} value={enteredAmount} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2023-01-01' max='2024-12-31' onChange={dateChangedHandler} value={enteredDate} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;