import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2024')

    const filterChangeHandler = (filteredYear) => {
        console.log('Yead data in expenses.js ' + filteredYear);
    }

      const filteredExpenses = props.expenses.filter((expense) => { 
        return expense.date.getFullYear().toString() === selectedYear;
      })

    return (
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onChangeFilter={filterChangeHandler}/>
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        ExpenseData={expense}
                    />
                ))}
            </Card>
  );
};

export default Expenses;