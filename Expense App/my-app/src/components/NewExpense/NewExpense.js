import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const ChildToParentReceiveData=(expenseFormData)=>{
        const expenseData={
            ...expenseFormData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.getDataFromChildNewExpense(expenseData);
    };
  return (
    <div className='new-expense'>
      <ExpenseForm  getDataFromChild={ChildToParentReceiveData}/>
    </div>
  );
};

export default NewExpense;