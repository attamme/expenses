import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {

    const expenses = [{
        id: 'e1',
        date: new Date(2024, 10, 28),
        title: 'Book',
        price: 30.99,
      },
      {
        id: 'e2',
        date: new Date(2023, 10, 28),
        title: 'New Jeans',
        price: 99.99,
      }
      ];
    return (
        <Card className="expenses">
                <ExpenseItem ExpenseData={expenses[0]}/>
                <ExpenseItem ExpenseData={expenses[1]}/>
        </Card>
  );
};

export default Expenses;