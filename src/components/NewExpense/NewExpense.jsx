import ExpenseForm from './ExpenseForm'
import {useState} from 'react';
import "./NewExpense.css"
import "./ExpenseForm.css"

const NewExpense = (props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random()

        };
        //console.log(expenseDate);
        props.onAddExpenseData(expenseData);
    };
    const [showForm, setShowForm]=useState(false);

    const setShowFormHandler = ()=>{
        setShowForm(true);
    }
    const setDontShowFormHandler = ()=>{
        setShowForm(false);
    }

    return(
        <div className='new-expense'>
            {!showForm && <button onClick={setShowFormHandler}>Add Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} 
            onSetDontShowForm={setDontShowFormHandler}onSetShowForm={setShowForm}></ExpenseForm>}
    </div>        

    ); 
};

export default NewExpense;
