import React from 'react';

const ExpenseForm = ({setTableData}) => {
  const handleSubmit = (e) => {
    debugger
    e.preventDefault(); 
    console.log(e.target);
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    setTableData((prevState)=>[...prevState,formObject]);
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" required />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" required>
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
          <input id="date" name="date" type="date" required />
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input id="amount" name="amount" type="number" required />
        </div>
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
