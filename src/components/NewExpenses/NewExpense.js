import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [showComponent, setShowComponent] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
    setShowComponent(false);
  }

  const ShowFormComponent = () => {
    setShowComponent(true);
  }

  const HideFormComponent = () => {
    setShowComponent(false);
  }

  return (
    <div className="new-expense">
    {showComponent ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={HideFormComponent}/> : <button onClick={ShowFormComponent}>Add New Expense</button>}
    </div>
  )
}

export default NewExpense;
