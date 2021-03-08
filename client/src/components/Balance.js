import React ,{useContext}from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = ()=> {
    const {transactions} = useContext(GlobalContext);

//amount
const amounts = transactions.map(transaction =>(transaction.amount));
//total using reduce
const total = amounts.reduce((acc,item) =>(acc+=item), 0).toFixed(2);  
    return (

        <div>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>

        </div>
    )
}