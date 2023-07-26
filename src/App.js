import './App.css';

import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import Card from './components/UI/Card';

function App() {
  return (
    <div>
      <Header />

      <Card>
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
      </Card>

    </div>
  );
}

export default App;
