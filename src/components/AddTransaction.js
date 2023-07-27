import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/transaction-ctx'

const AddTransaction = () => {
    const [text, setText ] = useState('')
    const [amount, setAmount ] = useState(0)


    const { addTransaction } = useContext(GlobalContext)
    const submitHandler = (e) => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random()* 100000),
            text,
            amount: +amount
        }
        
        addTransaction(newTransaction)

        setAmount(0)
        setText('')
    }
    return (

        <>
        <form className='input-form' onSubmit={submitHandler}>
            <div className='form-control'>
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} placeholder='Enter text....' />
            </div>
            <div className='form-control'>
                <label htmlFor="amount">Amount</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount....' />
            </div>

            <button>Add Transaction</button>
        </form>

        </>
    )
}

export default AddTransaction
