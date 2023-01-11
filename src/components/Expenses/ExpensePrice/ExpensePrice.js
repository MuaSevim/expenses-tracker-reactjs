import Card from "../../UI/Card/Card";
import styles from "./ExpensePrice.module.css";

const ExpensePrice = (props) => {
  const options = { style: "currency", currency: "USD" };
  const price = new Intl.NumberFormat("en-US", options).format(props.price);
  return <Card className={styles["expense-item__price"]}>{price}</Card>;
};

export default ExpensePrice;
