import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/transaction-ctx'

const Transaction = ({transaction}) => {
    const { delTransaction } = useContext()
  return (
    <div>
    </div>
  )
}

export default Transaction
