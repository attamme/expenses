import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';

const Expenses = (props) => {

    const { data } = props;

    return (
        <Card className="expenses">
            {data.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    price={expense.price}
                />
                )
            )} 
        </Card>
  );
};

export default Expenses;