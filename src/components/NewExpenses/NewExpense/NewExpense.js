import React, { useState } from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import Button from '../../UI/Button/Button';
import styles from './NewExpense.module.css';

const NewExpense = props => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(prevState => !prevState);
  };

  let content = (
    <div className={styles['expense-form__btn-container']}>
      <Button className={styles['expense-form__btn']} onClick={showFormHandler}>
        Add new expense
      </Button>
    </div>
  );

  if (showForm)
    content = (
      <ExpenseForm
        onNewExpense={props.onNewExpense}
        onCloseForm={showFormHandler}
      />
    );

  return <div className={styles['expense-form__container']}>{content}</div>;
};

export default NewExpense;
