import styles from "./Card.module.css";

const Card = (props) => {
  const classesAll = `${styles.card} ${props.className}`;
  return <div className={classesAll}>{props.children}</div>;
};

export default Card;
