import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.ExpenseData.title);

    const clickHandler = () => {
        console.log('Clicked!!!')
        setTitle(`Updated by click ${title}`)
        console.log(title)
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.ExpenseData.date}/>
            <div className='expense-item__description'>
                <h2>{props.ExpenseData.title}</h2>
                <div className='expense-item__price'>{props.ExpenseData.price}</div>
            </div>
            <button onClick={clickHandler}>Click Me</button>
        </Card>
);
};

export default ExpenseItem;