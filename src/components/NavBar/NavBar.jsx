import "./NavBar.css";

const NavBar = (props) => {
    return (
      <nav className="navbar navbar-expand nav-header">
        <h1 style={{color:props.color}} className="navbar-brand" href="#">
          Music Store
        </h1>
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
              <a style={{color:props.color}} className="nav-link" href="#">
                Discos
              </a>
            </li>
            <li className="nav-item">
              <a style={{color:props.color}} className="nav-link" href="#">
                Reproductores De Musica
              </a>
            </li>
            <li className="nav-item">
              <a style={{color:props.color}} className="nav-link" href="#">
                Instrumentos
              </a>
            </li>
          </ul>
          <li style={{listStyle: "none"}}>🛒</li>
          <p className="cantidadItems">0</p>
        </div>
      </nav>
    );
}

export default NavBar