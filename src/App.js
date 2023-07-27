import './App.css';

import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import Card from './components/UI/Card';
import GlobalProvider from './context/transaction-ctx';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Card className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </Card>

    </GlobalProvider>
  );
}

export default App;
