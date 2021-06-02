
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpenseList from "./ExpenseList"
import ExpenseChart from "./ExpenseChart"
import { useState } from "react";

function Expenses(props) {
  const expensesItems = props.expenses;

  const [filterYear, setFilterYear] = useState("2022");

  const filterChangeHandler = (year) => {
    
    setFilterYear(year);
    
    
  };

  let expensesItemsFilter = expensesItems.filter((item)=> item.date.getFullYear().toString()=== filterYear );

  
  return (
    <div className="expenses">
      <ExpenseFilter onFilterChange={filterChangeHandler}></ExpenseFilter>
      <ExpenseChart expenses={expensesItemsFilter}></ExpenseChart>
      <ExpenseList expenseList={expensesItemsFilter}></ExpenseList>

      {/* <ExpenseItem
            title= {expensesItems[0].title}
            amount= {expensesItems[0].amount}
            date= {expensesItems[0].date}

      ></ExpenseItem> */}
    </div>
  );
}
export default Expenses;
