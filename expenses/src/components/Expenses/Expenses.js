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
                {filteredExpenses.map((expense) => (
                  <ExpenseItem 
                  key={expense.id}
                  date={expense.date}
                  title={expense.title}
                  price={expense.price}
                  />
                ))}
              
            </Card>
  );
};

export default Expenses;