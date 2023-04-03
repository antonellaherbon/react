import { createContext, useContext, useState } from "react";

const cartContext = createContext({ default: "default" });
const Provider = cartContext.Provider;

export const useCartContext = () => useContext(cartContext)

function CartProvider(props){
    const [cart, setCart] = useState([]);

    function clearCart(){
        setCart([])
    }

    function addItem(producto, newQuantity) {
        const productoExistente = cart.find((prod) => prod.id === producto.id)
        if (productoExistente){
            const newCart = cart.map((prod) => {
                if (prod.id === producto.id){
                    return {...prod, quantity: prod.quantity + newQuantity}
                }else{
                    return prod
                }
            })

            setCart(newCart)
        }else{
            const newCart = [...cart]
            newCart.push({...producto, quantity: newQuantity})
            setCart(newCart)
    }}

    function removeItem(id){
        setCart(cart.filter(product => product.id !== id))
        console.log("remove")
    }

    // const isInCart = (id) => setCart(cart.filter(product => product.id !== id));

    return <Provider value={{ 
        cart, addItem, clearCart, removeItem
        }}>
            {props.children}
        </Provider>;
}

export { cartContext, CartProvider };