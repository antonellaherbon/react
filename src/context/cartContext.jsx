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
        console.log('carrito: ', cart);
        const productoExistente = cart.find((prod) => prod.id === producto.id)
        console.log("productoExistente: ", productoExistente)
        if (productoExistente){
            const newCart = cart.map((prod) => {
                if (prod.id === producto.id){
                    return {...prod, quantity: prod.quantity + newQuantity}
                }else{
                    return prod
                }
            })
        console.log('newCart: ', newCart);

            setCart(newCart)
        }else{
            const newCart = [...cart]
            newCart.push({...producto, quantity: newQuantity})
            setCart(newCart)
        console.log('newCart: ', newCart);
    }
        console.log('carrito: ', cart);

    }

    function removeItem(id){
        setCart(cart.filter(product => product.id !== id))
    }

    // const isInCart = (id) => setCart(cart.filter(product => product.id !== id));

    return <Provider value={{ 
        cart, addItem, clearCart, removeItem
        }}>
            {props.children}
        </Provider>;
}

export { cartContext, CartProvider };