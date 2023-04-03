import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import "./CartContent.css"

export default function CartElements() {
    const {cart} = useContext(cartContext)
    const {removeItem} = useContext(cartContext)

    return cart.map((disco) => {
            return (
                <div className="cartContent" key={disco.id}>
                    <img src={disco.image} alt="" style={{width: '150px', height: '150px'}}/>
                    <h1>{disco.title}</h1>
                    <h3 className="name">${disco.price}</h3>
                    <h3 className="name">Cantidad: {disco.quantity}</h3>
                    <button onClick={removeItem} className="borrar">🗑️</button>
                </div>
            )
        })
}
