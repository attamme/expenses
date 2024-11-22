import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const day = props.data.date.toLocaleString('en-US', {day: '2-digit'});
    const month = props.data.date.toLocaleString('en-US', {month: 'long'});
    const year = props.data.date.getFullYear();

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.data.date}/>
            <div className='expense-item__description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item__price'>{props.data.price}</div>
            </div>
        </div>
);
};

export default ExpenseItem;