import Card from "../../UI/Card/Card";
import styles from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
  const date = props.date;
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();

  return (
    <Card className={styles["expense-date"]}>
      <div className={styles["expense-date__month"]}>{month}</div>
      <div className={styles["expense-date__year"]}>{year}</div>
      <div className={styles["expense-date__day"]}>{day}</div>
    </Card>
  );
};

export default ExpenseDate;
