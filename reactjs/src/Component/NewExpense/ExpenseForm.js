import React from 'react';
import"./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {

const[enteredTitle , chaneTitle]= useState("");
const[enteredAmount, changeAmount]= useState("");
const[enteredDate, changeDate]=useState("");

// Alerntive of This is Object Form For storing the Data

// const[userInput, setUserInput]=useState({
//    enterdTitle: "",
//    enteredAmount:"",
//    enteredDate:""
// });
// const chaneTitleHandler =(event) =>{
//     setUserInput({
//       ...setUserInput,
//       enteredTitle:event.target.value,
//     })
// }

const ChageTitleHandler = (event) =>{
    chaneTitle(event.target.value);
};
const ChangeAmountHandler=(event)=>{
    changeAmount(event.target.value);
};
 const ChangeDateHandler=(event)=>{
    changeDate(event.target.value);
 };

const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    };
        props.onSaveExpenseData(expenseData);
        chaneTitle("");
        changeAmount("");
        changeDate("");
};

return(
    <form onSubmit={submitHandler}>
        <div className='new-expense_controls'>
            <div className='new-expense_control'>
                <label>Title</label>
                <input type= "text" value={enteredTitle}
                onChange={ChageTitleHandler}  />
            </div>
            <div className='new-expense_control'>
                <label>Amount</label>
                <input type= "number" min="0.01" step="0.01" 
                value={enteredAmount}
                onChange={ChangeAmountHandler} />
            </div>
            <div className='new-expense_control'>
                <label>Date</label>
                <input type= "date" min="2019-01-01" max="2023-01-01" 
                value={enteredDate}
                onChange={ChangeDateHandler} />
            </div>
        </div>
        <div className='new-expense_actions'>
            <button type='button' onClick = {props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
);
};
export default ExpenseForm;
