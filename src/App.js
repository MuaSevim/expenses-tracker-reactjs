import { useState } from 'react';
import NewExpense from './components/NewExpenses/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses/Expenses';
import styles from './App.module.css';

const expensesData = [
  {
    id: 'e1',
    item: 'Sunglasses',
    price: 280,
    date: new Date(2020, 8, 6),
  },
  {
    id: 'e2',
    item: 'Laptop Cooler',
    price: 80,
    date: new Date(2021, 2, 23),
  },
  {
    id: 'e3',
    item: 'Macbook Air',
    price: 880,
    date: new Date(2022, 11, 23),
  },
  {
    id: 'e4',
    item: 'Netflix',
    price: 19.40,
    date: new Date(2022, 1, 2),
  },
  {
    id: 'e5',
    item: 'New TV',
    price: 677,
    date: new Date(2023, 5, 13),
  },
  {
    id: 'e6',
    item: 'Fruits',
    price: 23,
    date: new Date(2023, 8, 5),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(expensesData);

  const newExpenseHandler = expenseData => {
    setExpenses(prevExpenses => {
      const newExpense = { id: '' + Math.random(), ...expenseData };
      return [newExpense, ...prevExpenses];
    });
  };

  const deleteExpenseHandler = expenseId => {
    setExpenses(prevExpenses => prevExpenses.filter(ex => ex.id !== expenseId));
  };

  const editExpenseHandler = (id, data) => {
    setExpenses(prevExpenses => {
      const index = prevExpenses.findIndex(ex => ex.id === id);
      prevExpenses[index] = { id, ...data };
      return [...prevExpenses];
    });
  };

  return (
    <div className={styles.container}>
      <h1>Expenses Tracker</h1>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses
        expenses={expenses}
        onDeleteExpense={deleteExpenseHandler}
        onEditExpense={editExpenseHandler}
      />
    </div>
  );
};

export default App;
