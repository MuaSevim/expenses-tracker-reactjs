import styles from "./ExpenseFilter.module.css";

const ExpenseFilter = (props) => {
  const yearChangeHandler = (e) => {
    props.onFilterYear(e.target.value);
  };

  return (
    <div className={styles["form-years"]}>
      <label>Filter by Year: </label>
      <select value={props.filteredYear} onChange={yearChangeHandler}>
        <option value="">All Years</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
