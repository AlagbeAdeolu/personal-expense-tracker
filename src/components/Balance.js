import React, { useContext } from 'react'
import { GlobalContext } from '../context/transaction-ctx'

const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts.filter(item => item > 0).reduce((a,b) => a+b, 0)

  const expense = amounts.filter(item => item < 0).reduce((a,b) => a-b, 0)
  const balance = income - expense
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </div>
  )
}

export default Balance
