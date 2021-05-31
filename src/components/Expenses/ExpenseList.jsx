import "./ExpenseList.css"
import ExpenseItem from "./ExpenseItem"

const ExpenseList = (props)=>{
    if (props.expenseList.length!==0){
        return(
            <div className="expense-list">
            {props.expenseList.map((expense)=>(
                <ExpenseItem 
                key={expense.id}
                title= {expense.title}
                amount= {expense.amount}
                date= {expense.date}
                
                ></ExpenseItem>
            ))
            }
            </div>
        );
    }
    else{
        return(
            <h2 className="expenses-list__fallback ">No expenses</h2>
        );

    }
  
};
export default ExpenseList;