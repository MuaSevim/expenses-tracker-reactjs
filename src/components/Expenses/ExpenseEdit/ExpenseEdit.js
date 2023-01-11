import { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './ExpenseEdit.module.css';

const ExpenseEdit = props => {
  const { item, price, date, id } = props.data;

  const formatDate = date => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [editDate, setEditDate] = useState(formatDate(date));
  const [editItem, setEditItem] = useState(item);
  const [editPrice, setEditPrice] = useState(price);

  const dateChangeHandler = e => {
    setEditDate(e.target.value);
  };

  const itemChangeHandler = e => {
    setEditItem(e.target.value);
  };

  const priceChangeHandler = e => {
    setEditPrice(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    const newData = {
      item: editItem,
      price: editPrice,
      date: new Date(editDate),
    };

    setEditDate('');
    setEditItem('');
    setEditPrice('');

    props.onDisplayEdit(false);
    props.onExpenseEdit(id, newData);
  };

  console.log(date.toISOString());

  return (
    <form className={styles['edit-form']} onSubmit={submitHandler}>
      <div className={styles['edit-form__group']}>
        <label>Date</label>
        <input type="date" onChange={dateChangeHandler} value={editDate} />
      </div>
      <div className={styles['edit-form__group']}>
        <label>Item Title</label>
        <input type="text" onChange={itemChangeHandler} value={editItem} />
      </div>
      <div className={styles['edit-form__group']}>
        <label>Price</label>
        <input type="number" onChange={priceChangeHandler} value={editPrice} />
      </div>
      <div className={styles['edit-form__action']}>
        <Button>Save</Button>
      </div>
    </form>
  );
};

export default ExpenseEdit;
