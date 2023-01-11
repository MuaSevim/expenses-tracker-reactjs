import { useState } from "react";
import ExpensesList from "../ExpenseList/ExpenseList";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesMonths from "../ExpensesMonth/ExpensesMonths";
import styles from "./Expenses.module.css";

const NewExpense = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  const yearChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const expenses = filteredYear
    ? props.expenses.filter((ex) => ex.date.getFullYear() === +filteredYear)
    : props.expenses;

  return (
    <div className={styles["expenses"]}>
      <ExpensesMonths expenses={expenses} />
      <div className={styles["expenses-container"]}>
        <ExpensesFilter
          onFilterYear={yearChangeHandler}
          filteredYear={filteredYear}
        />
        <ExpensesList
          expenses={expenses}
          onExpenseEdit={props.onEditExpense}
          onExpenseDelete={props.onDeleteExpense}
        />
      </div>
    </div>
  );
};

export default NewExpense;
