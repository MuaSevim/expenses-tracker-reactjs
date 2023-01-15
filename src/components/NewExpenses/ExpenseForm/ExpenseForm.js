import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './ExpenseForm.module.css';

// onNewExpense={props.onNewExpense}

const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [titleIsValid, setTitleIsValid] = useState(true);
  const [priceIsValid, setPriceIsValid] = useState(true);
  const [dateIsValid, setDateIsValid] = useState(true);

  

  const titleChangeHandler = e => {
    if (!e.target.value.length) setTitleIsValid(false);
    else setTitleIsValid(true);
    setEnteredTitle(e.target.value);
  };

  const priceChangeHandler = e => {
    setEnteredPrice(e.target.value);
  };

  const dateChangeHandler = e => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (!enteredTitle || !enteredPrice || !enteredDate) return;

    props.onNewExpense({
      item: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    });

    setEnteredTitle('');
    setEnteredPrice('');
    setEnteredDate('');
  };

  return (
    <form className={styles['expense-form']} onSubmit={submitHandler}>
      <div className={styles['expense-form__inputs']}>
        <div className={styles['expense-form__group']}>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={styles['expense-form__group']}>
          <label>Price</label>
          <input
            min="0"
            step="0.01"
            type="number"
            placeholder="Enter Price"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className={styles['expense-form__group']}>
          <label>Date</label>
          <input
            min="2020-01-01"
            max="2024-12-31"
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={styles['expense-form__actions']}>
        <Button className={styles['expense-form__btn']}>Add</Button>
        <Button
          type="button"
          className={styles['expense-form__btn']}
          onClick={props.onCloseForm}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
