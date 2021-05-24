import ExpenseItem from './ExpenseItem.jsx';
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css';
import Card from "../UI/Card.jsx";
import { useState } from 'react';
function Expenses(props){
    const expenses= props.expenses;
    const [filterYear,setFilterYear]=useState('2020');
    const filterChangeHandler=(year)=>{
          console.log(year+"in expense.js");
          setFilterYear(year);

    }
    return(
          <div className='expenses'>
                <ExpenseFilter onFilterChange={filterChangeHandler}></ExpenseFilter>
            
            <ExpenseItem 
                  title={expenses[0].title}
                  amount={expenses[0].amount}  
                  date={expenses[0].date} 
            ></ExpenseItem>
            <ExpenseItem
                  title={expenses[1].title}
                  amount={expenses[1].amount}  
                  date={expenses[1].date} 
                  ></ExpenseItem>
            <ExpenseItem
                  title={expenses[2].title}
                  amount={expenses[2].amount}  
                  date={expenses[2].date} 
            ></ExpenseItem>
            <ExpenseItem
                  title={expenses[3].title}
                  amount={expenses[3].amount}  
                  date={expenses[3].date} 
            ></ExpenseItem>
      
    </div>
    );
}
export default Expenses;