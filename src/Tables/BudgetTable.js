// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function BudgetTable() {
//   const [budgetData, setBudgetData] = useState([]);
//   const [expenseData, setExpenseData] = useState([]);
//   const [selectedMonth, setSelectedMonth] = useState('');
//   const [monthlyBudget, setMonthlyBudget] = useState([
//     'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
//   ]);

//   useEffect(() => {
//     fetchData();
//   }, [selectedMonth]);

//   const fetchData = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const userData = localStorage.getItem('userData');

//       // Fetch budget data
//       const budgetEndpoint = `http://localhost:4000/get-budgets/${userData}?month=${selectedMonth}`;
//       const budgetResponse = await axios.get(budgetEndpoint, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setBudgetData(budgetResponse.data);

//       // Fetch expense data
//       const expenseEndpoint = `http://localhost:4000/get-expenses/${userData}?month=${selectedMonth}`;
//       const expenseResponse = await axios.get(expenseEndpoint, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setExpenseData(expenseResponse.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>Budget and Expense Table</h1>

//       <div style={{ marginBottom: '20px', display: 'inline-block', textAlign: 'left' }}>
//         <label htmlFor="monthlyBudget" style={{ marginRight: '10px', fontSize: '20px' }}>
//           Choose the month for which you want your expenses to be displayed:
//         </label>
//         <select
//           id="monthlyBudget"
//           onChange={(e) => setSelectedMonth(e.target.value)}
//           value={selectedMonth}
//           style={{
//             padding: '8px',
//             boxSizing: 'border-box',
//             fontSize: '16px',
//             borderRadius: '5px',
//             border: '1px solid #ccc',
//             width: '200px',
//           }}
//         >
//           <option value="">Select Month</option>
//           {monthlyBudget.map((month) => (
//             <option key={month} value={month}>
//               {month}
//             </option>
//           ))}
//         </select>
//       </div>

//       <table style={{ width: '100%', borderCollapse: 'collapse', margin: '0 auto', textAlign: 'left' }}>
//         <thead>
//           <tr>
//             <th style={tableHeaderStyle}>Category</th>
//             <th style={tableHeaderStyle}>Budget</th>
//             <th style={tableHeaderStyle}>Expense</th>
//             <th style={tableHeaderStyle}>Monthly Budget</th>
//           </tr>
//         </thead>
//         <tbody>
//           {budgetData.map((item, index) => (
//             <tr key={item._id} style={tableRowStyle}>
//               <td style={tableCellStyle}>{item.category}</td>
//               <td style={tableCellStyle}>{item.budget}</td>
//               <td style={tableCellStyle}>{expenseData[index]?.expense || 0}</td>
//               <td style={tableCellStyle}>{item.monthlyBudget}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// // Styles (unchanged)
// const tableHeaderStyle = {
//   backgroundColor: '#f2f2f2',
//   padding: '10px',
//   borderBottom: '1px solid #ddd',
//   textAlign: 'center',
// };

// const tableRowStyle = {
//   backgroundColor: '#fff',
//   borderBottom: '1px solid #ddd',
//   textAlign: 'center',
// };

// const tableCellStyle = {
//   padding: '10px',
// };

// export default BudgetTable;




















import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BudgetTable() {
  const [budgetData, setBudgetData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [monthlyBudget, setMonthlyBudget] = useState([
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ]);

  useEffect(() => {
    if (selectedMonth) {
      fetchData();
    } else {
      // Clear data if no month is selected
      setBudgetData([]);
      setExpenseData([]);
    }
  }, [selectedMonth]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('userData');

      // Fetch budget data
      const budgetEndpoint = `http://localhost:4000/get-budgets/${userData}?month=${selectedMonth}`;
      const budgetResponse = await axios.get(budgetEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBudgetData(budgetResponse.data);

      // Fetch expense data
      const expenseEndpoint = `http://localhost:4000/get-expenses/${userData}?month=${selectedMonth}`;
      const expenseResponse = await axios.get(expenseEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setExpenseData(expenseResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Budget and Expense Table</h1>

      <div style={{ marginBottom: '20px', display: 'inline-block', textAlign: 'left' }}>
        <label htmlFor="monthlyBudget" style={{ marginRight: '10px', fontSize: '20px' }}>
          Choose the month for which you want your expenses to be displayed:
        </label>
        <select
          id="monthlyBudget"
          onChange={(e) => setSelectedMonth(e.target.value)}
          value={selectedMonth}
          style={{
            padding: '8px',
            boxSizing: 'border-box',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '200px',
          }}
        >
          <option value="">Select Month</option>
          {monthlyBudget.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {selectedMonth && (
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '0 auto', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Category</th>
              <th style={tableHeaderStyle}>Budget</th>
              <th style={tableHeaderStyle}>Expense</th>
              <th style={tableHeaderStyle}>Monthly Budget</th>
            </tr>
          </thead>
          <tbody>
            {budgetData.map((item, index) => (
              <tr key={item._id} style={tableRowStyle}>
                <td style={tableCellStyle}>{item.category}</td>
                <td style={tableCellStyle}>{item.budget}</td>
                <td style={tableCellStyle}>{expenseData[index]?.expense || 0}</td>
                <td style={tableCellStyle}>{item.monthlyBudget}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  padding: '10px',
  borderBottom: '1px solid #ddd',
  textAlign: 'center',
};

const tableRowStyle = {
  backgroundColor: '#fff',
  borderBottom: '1px solid #ddd',
  textAlign: 'center',
};

const tableCellStyle = {
  padding: '10px',
};

export default BudgetTable;
