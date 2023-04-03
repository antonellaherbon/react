
import "./CartContent.css"
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

function CartContent(){
    return(
        <>
            <CartElements/>
            <CartTotal/>
        </>
    )
}

export default CartContent;