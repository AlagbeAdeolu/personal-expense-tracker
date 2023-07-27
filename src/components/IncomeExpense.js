import React, { useContext } from 'react'
import Card from './UI/Card'
import { GlobalContext } from '../context/transaction-ctx'

const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts.filter(item => item > 0).reduce((a,b) => a+b, 0)

  const expense = amounts.filter(item => item < 0).reduce((a,b) => a-b, 0)
  
  return (
    <Card className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p>${income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p>${expense}</p>
      </div>
    </Card>
  )
}

export default IncomeExpense
