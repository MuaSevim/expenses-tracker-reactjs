import styles from "./ExpenseList.module.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {
  if (!props.expenses.length) {
    return <p className={styles["expenses-fallback"]}>No expenses found!</p>;
  }

  return (
    <ul className={styles["expenses-list"]}>
      {props.expenses.map((ex) => (
        <ExpenseItem
          key={ex.id}
          id={ex.id}
          item={ex.item}
          price={ex.price}
          date={ex.date}
          onExpenseEdit={props.onExpenseEdit}
          onExpenseDelete={props.onExpenseDelete}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
