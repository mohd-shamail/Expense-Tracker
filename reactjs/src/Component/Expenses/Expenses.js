import { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css"

const Expenses=(props)=> {
const [filteredYear , setFilteredYear] =useState("2020");

const filterChangeHandler = (selectedYear) => {
  setFilteredYear(selectedYear);
};

const filteredExpenses = props.items.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
});

  return (
    <div>
    <Card className="expenses">
    <ExpenseFilter 
      selected = {filteredYear}
      onChangeFilter={filterChangeHandler}
       />
       <ExpensesChart expenses = {filteredExpenses}/>
       <ExpensesList items = {filteredExpenses}/>
       </Card>
    </div>
  );
};

    /* <ExpenseItem 
     title= {props.items[0].title}
     amount= {props.items[0].amount}
     date= {props.items[0].date}
    />  
    <ExpenseItem title= {props.items[1].title}
     amount= {props.items[1].amount}
     date= {props.items[1].date}
     />  
    <ExpenseItem title= {props.items[2].title}
     amount= {props.items[2].amount} 
     date= {props.items[2].date}
     />    
    <ExpenseItem title= {props.items[3].title}
     amount= {props.items[3].amount} 
     date= {props.items[3].date} 
     />   
    <ExpenseItem title= {props.items[4].title}
     amount= {props.items[4].amount} 
     date= {props.items[4].date}
     />    */
    

      /* {/* <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/> */
      // {filteredExpenses.length=== 0 && <p className="para">No Result Found !</p>}
      // {filteredExpenses.length>0 &&
      // filteredExpenses.map((expense)=> (
      //   <ExpenseItem
      //   key={expense.id}
      //   title={expense.title}
      //   amount={expense.amount}
      //   date={expense.date} />
      // ))} */
   
export default Expenses;