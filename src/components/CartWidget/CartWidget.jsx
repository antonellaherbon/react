import { Link } from "react-router-dom";

function CartWidget(){
    return (
        <>
            <Link className="nav-link" to="/cart">
                🛒
            </Link>
        </>
    )
}

export default CartWidget;