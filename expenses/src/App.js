/* import logo from './logo.svg'; */
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
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
  
  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
