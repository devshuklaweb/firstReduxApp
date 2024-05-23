import React from 'react'
import {decrement, increment} from '../state/amountSlice'
import { useSelector, useDispatch } from 'react-redux'
const Shop = () => {
    const count = useSelector((state) => state.cart.value) //store ki state ko print krne ke liye
    const dispatch = useDispatch() //reducer ke method ko call krne ke liye
    return (
        <>
            <div className="container" style={{marginTop:'100px'}}>
                <h2>Deposit/Withdraw Money </h2>
                <button className="btn btn-primary mx-2" onClick={() => dispatch(decrement())}>-</button>
                  Update Balance {count}
                <button className="btn btn-primary mx-2" onClick={() => dispatch(increment())}>+</button>
            </div>
        </>
    )
}

export default Shop
