import ExpensesChart from "../../ExpensesChart/ExpensesChart";

const ExpensesMonths = (props) => {
  const getMonth = (i) =>
    new Date(2022, i, 1).toLocaleString("en-US", { month: "short" });

  const monthsData = Array.from({ length: 12 }, (_, i) => {
    return { month: getMonth(i), value: 0 };
  });

  props.expenses.forEach((ex) => {
    const monthIndex = ex.date.getMonth();
    monthsData[monthIndex].value++;
  });

  return <ExpensesChart months={monthsData} />;
};

export default ExpensesMonths;
