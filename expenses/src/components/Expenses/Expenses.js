import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [selectedYear] = useState('2024')

    const filterChangeHandler = (filteredYear) => {
        console.log('Yead data in expenses.js ' + filteredYear);
    }

    return (
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler}/>
                {props.expenses.map((expense) => {
                    return <ExpenseItem expenseData={expense} key={expense.id}/>
                })
              }
            </Card>
  );
};

export default Expenses;