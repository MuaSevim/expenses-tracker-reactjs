import { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import ExpensePrice from '../ExpensePrice/ExpensePrice';
import ExpenseEdit from '../ExpenseEdit/ExpenseEdit';
import Button from '../../UI/Button/Button';
import styles from './ExpenseItem.module.css';

const ExpenseItem = props => {
  const [showEdit, setShowEdit] = useState(false);

  const deleteExpenseHandler = () => {
    props.onExpenseDelete(props.id);
  };

  const displayEditHandler = () => {
    setShowEdit(prevEdit => !prevEdit);
  };

  let content = (
    <>
      <ExpenseDate date={props.date} />
      <div className={styles['expense-item__info']}>
        <p className={styles['expense-item__title']}>{props.item}</p>
        <ExpensePrice price={props.price} />
      </div>
      <div className={styles['expense-item__actions']}>
        <Button onClick={displayEditHandler}>Edit</Button>
        <Button onClick={deleteExpenseHandler}>Delete</Button>
      </div>
    </>
  );

  if (showEdit)
    content = (
      <ExpenseEdit
        data={props}
        onDisplayEdit={displayEditHandler}
        onExpenseEdit={props.onExpenseEdit}
        onExpenseDelete={props.onExpenseDelete}
      />
    );

  return <li className={styles['expense-item']}>{content} </li>;
};

export default ExpenseItem;
