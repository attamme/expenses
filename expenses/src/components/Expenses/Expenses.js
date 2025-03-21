import React, {useState} from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const {expenses} = props;

    const [filteredYear, setFilteredYear] = useState('2023');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log('Valitud aasta on:', selectedYear);
    }

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {
                  filteredExpenses.length === 0 && <p>No expenses found.</p>
                }
                {
                  filteredExpenses.length > 0 && filteredExpenses.map((expense) => {
                    return <ExpenseItem date={expense.date} key={expense.id}/> 
                  })
                }
              
            </Card>
  );
};

export default Expenses;