import React, {useState} from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {

  const [selectedYear, setSelectedYear] = useState("2020");

  const yearChangeHandler = (yearParameter) => {
    setSelectedYear(yearParameter);
  }

  const filteredItems = props.items.filter(item => {
    return item.date.getFullYear().toString() === selectedYear
  })

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={selectedYear} onYearChange={yearChangeHandler}/>
    <ExpensesChart expenses={filteredItems}/>
    <ExpensesList items={filteredItems}/>
    </Card>
    </div>
  )

}

export default Expense;
