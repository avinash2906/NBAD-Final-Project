import React from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <main className="center" id="main" aria-label="main">
      <div>
        <h2 style={{ fontSize: '20px' }}>Please select which action you want to perform</h2>

        <div style={{ marginBottom: '10px' }}>
          <Link to="/configure-budgets">
            <button style={{  backgroundColor: '#4a90e2', color: 'black-grey', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', margin: '25px' }}>
              Add New Budgets
            </button>
          </Link>
          <Link to="/add-expense">
          <button style={{  backgroundColor: '#4a90e2', color: 'black-grey', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', margin: '25px' }}>
            Add New Expenses
            </button>
          </Link>
        </div>
      </div>
      <div className="page-area">
        <article>
          <h1>Stay on track</h1>
          <p>
            Do you know where you are spending your money? If you really stop to track it down, you would get surprised!
            Proper budget management depends on real data... and this app will help you with that!
          </p>
        </article>

        <article>
          <h1>Alerts</h1>
          <p>What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.</p>
        </article>

        <article>
          <h1>Results</h1>
          <p>
            People who stick to a financial plan, budgeting every expense, get out of debt faster! Also, they live
            happier lives... since they expend without guilt or fear... because they know it is all good and accounted
            for.
          </p>
        </article>

        <article>
          <h1>Free</h1>
          <p>This app is free!!! And you are the only one holding your data!</p>
        </article>
      </div>
    </main>
  );
}

export default HomePage;