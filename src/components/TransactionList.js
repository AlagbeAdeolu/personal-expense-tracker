import React, { useContext } from 'react'
import { GlobalContext } from '../context/transaction-ctx'

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext)
  return (
    <ul>
      {transactions.map(transaction => <li>{transaction.text}: {transaction.amount}</li>)}
    </ul>
  )
}

export default TransactionList
