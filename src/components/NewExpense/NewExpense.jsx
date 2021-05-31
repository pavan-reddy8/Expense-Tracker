import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

const NewExpense = (props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random()

        };
        //console.log(expenseDate);
        props.onAddExpenseData(expenseData);
    };

    return(
        <div className='new-expense'>
           <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    ); 
};

export default NewExpense;
