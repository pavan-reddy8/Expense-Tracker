import {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm =(props)=>{

    //using 3 states
    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    };
    
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    };
    
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    };

    //using one state
    // const [userInput,setUserInput]=useState(
    //     {
    //         enteredTitle:'',
    //         enteredAmount:'',
    //         enteredDate:''
    //     }
    // );

    // const titleChangeHandler=(event)=>{
    //     setUserInput({
    //         ...userInput,
    //         enteredTitle:event.target.value

    //     });
    // };
    
    // const amountChangeHandler=(event)=>{
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount:event.target.value

    //     });
    // };
    
    // const dateChangeHandler=(event)=>{
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount:event.target.value

    //     });
    // };

    //better approch
    // const [userInput,setUserInput]=useState(
    //     {
    //         enteredTitle:'',
    //         enteredAmount:'',
    //         enteredDate:''
    //     }
    // );

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseDate);
        //console.log(expenseDate);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };




    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>

                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} onChange={amountChangeHandler}></input>

                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler}></input>

                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>

            </div>
        </form>
    )
};
export default ExpenseForm;