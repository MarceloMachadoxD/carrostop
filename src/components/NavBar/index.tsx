import "./styles.css";
import { NavLink } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <Link to="/">
            <h1>Carros Top</h1>{" "}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#hamburguer-navbar"
            aria-controls="hamburguer-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="hamburguer-navbar">
            <ul className="navbar-nav offset-md-2 main-menu hamburguer-navbar">
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/products">CATÁLOGO</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
