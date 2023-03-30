import React,{useState} from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const dummyExpenses=[
    {
      id:1,
      title:'Coffe',
      amount:223,
      date:new Date(2023,1,22)
    },
    {
      id:2,
      title:'Green Tea',
      amount:400,
      date:new Date(2022,1,12)
    }
  ];
  const [expenses,UpdatedExpenses]=useState(dummyExpenses);
  
  const getDataFromChild=(getExpenseDataFromNewExpense)=>{
    UpdatedExpenses((PrevState)=>{
      
       return  [getExpenseDataFromNewExpense,...PrevState];
      
    })
  };
  console.log(expenses);
  return (
    <div>
      <NewExpense getDataFromChildNewExpense={getDataFromChild} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
