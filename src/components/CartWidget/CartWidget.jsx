import { Link } from "react-router-dom";

function CartWidget(){
    return (
        <>
            <Link to="/cart">
                🛒
            </Link>
        </>
    )
}

export default CartWidget;