import React, { useState } from 'react';

const ExpenseForm = ({setTableData}) => {
  const [expenseData,setExpenseData] = useState({
    title: '',
    category: '',
    date: '',
    amount: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault(); 
    // console.log(e.target);
    // const formData = new FormData(e.target);
    // const formObject = Object.fromEntries(formData.entries());
    // setTableData((prevState)=>[...prevState,formObject]);

    // using an optimised approach 
    setTableData((prevState) => [...prevState, expenseData]);
    setExpenseData({
      title: '',
      category: '',
      date: '',
      amount: ''
    });
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" value={expenseData.title} onChange={(e) => setExpenseData({ ...expenseData, title: e.target.value })} required/>
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" value={expenseData.category} onChange={(e) => setExpenseData({ ...expenseData, category: e.target.value })} required>
            <option value="">All</option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="date">Date</label>
          <input id="date" name="date" type="date" value={expenseData.date} onChange={(e) => setExpenseData({ ...expenseData, date: e.target.value })} required />
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input id="amount" name="amount" type="number" value={expenseData.amount} onChange={(e) => setExpenseData({ ...expenseData, amount: e.target.value })} required />
        </div>
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
