import React from 'react'
import data from '../assets/sample'

const Expensetable = ({tableData,setTableData}) => {
  const filterTableData = (e) => {
  const category = e.target.value.toLowerCase(); 
  if (category) {
    const filteredData = tableData.filter((item) => 
      item.category.toLowerCase() === category
    );
    if (filteredData.length) {
      setTableData(filteredData);
    }
  }
};

  return (
    <>
        <table className="expense-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>
                <select onChange={filterTableData}>
                  <option value="">All</option>
                  <option value="Grocery">Grocery</option>
                  <option value="clothes">Clothes</option>
                  <option value="bills">Bills</option>
                  <option value="education">Education</option>
                  <option value="medicine">Medicine</option>
                </select>
              </th>
              <th>Date</th>
              <th className="amount-column">
                <div>
                  <span>Amount</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow up-arrow"
                  >
                    <title>Ascending</title>
                    <path
                      d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    viewBox="0 0 384 512"
                    className="arrow down-arrow"
                  >
                    <title>Descending</title>
                    <path
                      d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                    />
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td>{item.date}</td>
                  <td className="amount-column">₹{item.amount}</td>
                </tr>
              )
            })}
            <tr>
              <th>Total</th>
              <th></th>
              <th></th>
              <th>₹ {tableData.reduce((total, item) => total + item.amount, 0)}</th>
            </tr>
          </tbody>
        </table>
    </>
  )
}

export default Expensetable