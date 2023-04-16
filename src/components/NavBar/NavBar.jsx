import { Link } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

const NavBar = (props) => {
  const {cart} = useContext(cartContext)


    return (
      <nav className="navbar navbar-expand nav-header">
        <Link to="/" style={{color:props.color}} className="navbar-brand" href="#">
          Music Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav justify-content-around w-100">
            <li className="nav-item">
              <Link to="/category/Pop"style={{color:props.color}} className="nav-link" href="#">
                Pop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/HyperPop" style={{color:props.color}} className="nav-link" href="#">
                HyperPop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/category/Rock" style={{color:props.color}} className="nav-link" href="#">
                Rock
              </Link>
            </li>
          </ul>
          <li className="nav-item" style={{listStyle: "none"}}>
            <CartWidget/>
          </li>
          <p className="cantidadItems">{cart.length}</p>
        </div>
      </nav>
    );
}

export default NavBar