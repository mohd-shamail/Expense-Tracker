import React from 'react'
import { useState } from "react"
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

const ExpenseItem=(props) => {
     
    return(
        <li>
    <Card className='expanse-item'>
        <ExpenseDate date={props.date} />
        <div className='expanse-item_description'>
            <h2>{props.title}</h2>
        
        <div className='expanse_price'>Rs. {props.amount}</div>
        </div>
      
    </Card>
    </li>
    );
}


export default ExpenseItem;