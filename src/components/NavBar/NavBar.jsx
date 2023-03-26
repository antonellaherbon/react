import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
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
          <ul className="navbar-nav justify-content-center w-100">
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
          <li style={{listStyle: "none"}}>
            🛒
          </li>
          <p className="cantidadItems">0</p>
        </div>
      </nav>
    );
}

export default NavBar