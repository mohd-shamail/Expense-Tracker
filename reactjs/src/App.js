import React, { useState } from 'react';

import NewExpense from './Component/NewExpense/NewExpense';
import ExpenseItem from "./Component/Expenses/ExpenseItem";
import Expenses from "./Component/Expenses/Expenses";

const DUMMY_Expenses = [
  {
   id:"e1", 
   title:"Car Insurance",
   amount:294.67,
   date: new Date(2021,2,28) } ,
   
   { id:"e2", title: "Mobile Recharge", amount:660.78, date: new Date(2021,5,20)},
   
   { id:"e3", title: "Electricity bill", amount:320.59, date: new Date(2021,6,18)},
  
   { id:"e4", title: "Shopping", amount:120.68, date: new Date(2021,6,13) },
  
   { id:"e5", title: "College Fees", amount:300.25, date: new Date(2021,8,12)},
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
