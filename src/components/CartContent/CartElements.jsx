import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import "./cart.css"
import { createOrder } from "../../service/database"
import Flex from "../Flex/Flex"
import Swal from "sweetalert2"
import FormCheckout from "./FormCheckout"
import { redirect } from "react-router-dom"


export default function CartElements() {
    const {cart} = useContext(cartContext)
    const {removeItem, clearCart} = useContext(cartContext)


    function productosEnCarrito(){
        return (
    
            <>
            <FormCheckout onCheckout = {handleCheckout}/>
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
    
            <div className="cartList_detail">
            {/* <h4>El total de tu compra es de $ --,--</h4> */}
            </div>
            <Flex>
                <button onClick={finalizarCompra}>Finalizar Compra</button>
            </Flex>
        </>
        );
    }

    // function carritoVacio(){
    //     <div>
    //         <h1>Su carrito esta vacio. Empiece a navegar</h1>
    //     </div>
    //     redirect("/")
    // }

    async function handleCheckout(userData) {
        const order = {
            items: cart,
            buyer: userData,
            total: "",
            date: new Date(),
        }
        const orderId = await createOrder(order);
    };
        
    function finalizarCompra(userData,orderId){
        clearCart();
        handleCheckout();
        const orderCompleted = new Swal({
            title: "Gracias por su compra," +userData.username,
            text: "Su compra se ha realizado con exito. Tu ticket de compra esta bajo el id: " +orderId,
            icon: "success",
        })
    }
    
    return(cart.length === 0 ? "Su carrito esta vacio" : productosEnCarrito())
}
// }
