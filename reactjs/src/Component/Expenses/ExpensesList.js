import React from 'react';
import ExpenseItem from './ExpenseItem';
import "./ExpenseList.css";

const ExpensesList = (props) => {
    if(props.items.length === 0){
        return <h1 className='expense-list_fallback'> No expanses Found !</h1>;
    }
    return(
        <ul className='expense-list'>
            {props.items.map((expense)=> (
                <ExpenseItem
                key = {expense.id}
                title={expense.title}
                amount = {expense.amount}
                date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;

