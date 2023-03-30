import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
function Expenses (props){
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
      });
return(
    <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {/* { props.items.map((expense)=>(
            <ExpenseItem key={expense.id} title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
        ))
            
        } */}
        <ExpensesList items={filteredExpenses} />
        
    </Card>
)
}
export default Expenses;