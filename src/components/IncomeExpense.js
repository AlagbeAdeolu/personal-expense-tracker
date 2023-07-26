import React from 'react'
import Card from './UI/Card'

const IncomeExpense = () => {
  return (
    <Card className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p>$500</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p>$500</p>
      </div>
    </Card>
  )
}

export default IncomeExpense
