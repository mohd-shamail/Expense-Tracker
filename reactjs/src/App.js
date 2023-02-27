import React, { useState } from 'react';

import NewExpense from './Component/NewExpense/NewExpense';
import Expenses from "./Component/Expenses/Expenses";

const DUMMY_Expenses = [
  {
   id:"e1", 
   title:"Car Insurance",
   amount:294.67,
   date: new Date(2021,2,28) } ,
   
   { id:"e2", title: "Mobile Recharge", amount:660.78, date: new Date(2021,5,20)},
   
   { id:"e3", title: "Electricity bill", amount:320.59, date: new Date(2020,6,18)},
  
   { id:"e4", title: "Shopping", amount:120.68, date: new Date(2021,6,13)},
  
   { id:"e5", title: "College_Fees", amount:300.25, date: new Date(2021,8,12)},

   { id:"e6", title: "Laptop", amount:4000, date: new Date(2020,5,11)},

  { id:"e7", title: "Shoes", amount:2400, date: new Date(2023,2,22)},

  { id:"e8", title: "Bike", amount:84500, date: new Date(2022,12,19)},

  { id:"e9", title: "Shopping", amount:7080, date: new Date(2020,8,2)},

  { id:"e10", title: "Exam-Fee", amount:8000, date: new Date(2022,12,25)},

  { id:"e11", title: "IPhone", amount:15000, date: new Date(2023,1,1)},

    { id:"e12", title: "Bag", amount:800, date: new Date(2023,2,10)},

   { id:"e13", title: "Book", amount:500.25, date: new Date(2022,8,2)},

    { id:"e14", title: "Trip", amount:2900, date: new Date(2020,4,22)},

    { id:"e15", title: "Car", amount:900000, date: new Date(2021,3,14)},

    { id:"e16", title: "Fan", amount:765.50, date: new Date(2020,5,6)},
 ];


const App=()=> {
  const [expenses, setExpenses] = useState(DUMMY_Expenses);
  
 const addExpenseHandler = (expense) => {
     setExpenses ((prevExpenses) => {
      return [expense, ...prevExpenses];
     });
    };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items = {expenses} />
    </div>
  );
};

export default App;
