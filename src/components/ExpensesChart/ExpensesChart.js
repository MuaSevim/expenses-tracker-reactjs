import ExpensesBar from './ExpensesBar';
import styles from './ExpensesChart.module.css';

const ExpensesChart = props => {
  const max = props.months.reduce((acc, curr) => curr.value + acc, 0);
  return (
    <div className={styles['expenses-chart']}>
      <h2>Graph by months</h2>
      <ul className={styles['expenses-chart__container']}>
        {props.months.map(({ month, value }) => (
          <ExpensesBar key={month} month={month} value={value} maxValue={max} />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesChart;
