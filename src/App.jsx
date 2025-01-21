import { useState } from 'react';
import './App.css'
import data from './assets/sample.js'
import Expenseform from './Components/Expenseform.jsx';
import Expensetable from './Components/Expensetable.jsx';
function App() {
const [tableData,setTableData] = useState(data);
  return (
    <>
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
      <Expenseform setTableData={setTableData}/>
      <Expensetable tableData={tableData} setTableData={setTableData}/>

        <div className="context-menu">
            <div>Edit</div>
            <div>Delete</div>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
