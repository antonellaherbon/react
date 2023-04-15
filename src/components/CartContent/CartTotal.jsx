import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext';
import "./cart.css"

export default function CartTotal() {
    const {cart} = useContext(cartContext);

    const total = cart.reduce((acc, disco) => acc + disco.price, 0);
    return (
        <div className='total'>
            <h3> total a pagar: ${total}</h3>
        </div>
    )
}

