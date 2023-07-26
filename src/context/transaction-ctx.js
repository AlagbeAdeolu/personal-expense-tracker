import { createContext, useReducer } from "react";

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState)

const GlobalProvider = ({ children }) => {

    const AppReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TRANSACTION':
                return {
                    ...state,
                    transactions: [...state.transactions, action.payload]
                }
            case 'DEL_TRANSACTION':
                return {
                    ...state,
                    transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DEL_TRANSACTION',
            payload: id
        })
    }

    return <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalProvider