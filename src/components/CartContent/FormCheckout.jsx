import { useContext, useState } from "react";
import "./FormCheckout.css"
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../../service/database"
import Flex from "../Flex/Flex"
import Swal from "sweetalert2"

export default function FormCheckout() {
    const {cart, clearCart} = useContext(cartContext)

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        phone: ""
    });

    function handleInputChange(evt) {
        const inputText = evt.target.value;
        const inputName = evt.target.name;
        const newUserData = { ...userData };
        newUserData[inputName] = inputText;
        setUserData(newUserData);
    }

    async function handleCheckout(userData) {
        const order = {
            items: cart,
            buyer: userData,
            total: "",
            date: new Date(),
        }
        const orderId = await createOrder(order);
        return orderId
    };
    
    async function finalizarCompra(evt){
        evt.preventDefault();
        const orderId = await handleCheckout(userData);
        console.log(orderId)
        const orderCompleted = new Swal({
            title: "Gracias por su compra," +userData.username,
            text: "Su compra se ha realizado con exito. Tu ticket de compra esta bajo el id: " +orderId,
            icon: "success",
        })
        clearCart();
    }

    return (
    <>
        <form onSubmit={finalizarCompra} >
            <h1>¡Estas a un segundo de finalizar tu compra!</h1>
            <h2>Ingresa tus datos para completar la compra</h2>
            <div className="form-group">
                <label className="label-input">Nombre</label>
                <input className="datos"
                value={userData.username}
                name="username"
                type="text"
                required
                onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label type="email" className="label-input">Email</label>
                <input className="datos"
                value={userData.email}
                name="email"
                type="text"
                required
                onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label className="label-input">Teléfono</label>
                <input className="datos"
                value={userData.phone}
                name="phone"
                type="text"
                required
                onChange={handleInputChange}
                />
            </div>
        <Flex>
            <button type="submit">Finalizar Compra</button>
        </Flex>
    </form>
    </>
    );
}
