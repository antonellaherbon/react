import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext"
import "./cart.css"
import Swal from "sweetalert2"
import FormCheckout from "./FormCheckout"

export default function CartContent() {
    const {cart, removeItem, clearCart} = useContext(cartContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (cart.length === 0){
            const alertaVacio = new Swal(
                    'Su carrito está vacio',
                    'Vuelva a la pagina principal',
                    'warning'
            ).then(() => {
                navigate("/")
            })
        }
    }, [cart])

    function productosEnCarrito(){
        return (
    
            <>
            <FormCheckout/>
            <h1 className="items">Tu Carrito</h1>
    
            <table className="cartList">
            <thead className="cartList_head">
                <tr className="cartList_row">
                <th>Portada</th>
                <th>Titulo</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Remover</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item) => (
                <tr key={item.id} className="cartList_row">
                    <td>
                    <img height={50} src={item.image} alt={item.title} />
                    </td>
                    <td>{item.title}</td>
                    <td>$ {item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                    <button onClick={() => removeItem(item.id)}>
                    🗑️
                    </button>
                    </td>
                    <th>${item.price}</th>
                </tr>
                ))}
            </tbody>
            </table>
            
        </>
        );
    }
    
    return(productosEnCarrito())
}
// }