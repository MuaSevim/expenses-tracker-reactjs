import styles from "./ExpensesBar.module.css";

const ExpensesBar = (props) => {
  const { value, maxValue, month } = props;

  const barHeight = value ? Math.floor((value / maxValue) * 100) : 0;

  return (
    <li className={styles["expenses-bar"]}>
      <div className={styles["expenses-bar__outer"]}>
        <div
          className={styles["expenses-bar__inner"]}
          style={{ height: `${barHeight}%` }}
        ></div>
      </div>
      <p className={styles["expenses-bar__label"]}>{month}</p>
    </li>
  );
};

export default ExpensesBar;
