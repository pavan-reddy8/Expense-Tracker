import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

const NewExpense = (props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseDate={
            ...enteredExpenseData,
            id: Math.random()

        };
        //console.log(expenseDate);
        props.onAddExpenseData(expenseDate);
    };

    return(
        <div className='new-expense'>
           <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    ); 
};

export default NewExpense;
