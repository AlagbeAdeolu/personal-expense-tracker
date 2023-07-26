import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/transaction-ctx'

const AddTransaction = () => {
    const [text, setText ] = useState('')
    const [amount, setAmount ] = useState(0)


    const { addTransaction } = useContext(GlobalContext)
    const submitHandler = (e) => {
        
    }
    return (

        <>
        <form onSubmit={submitHandler}>
            <div className='form-control'>
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} />
            </div>
            <div className='form-control'>
                <label htmlFor="amount">Amount</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
        </form>

        </>
    )
}

export default AddTransaction
