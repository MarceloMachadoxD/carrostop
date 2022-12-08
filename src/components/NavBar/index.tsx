import "./styles.css";
import { NavLink } from "react-router-dom";
import "bootstrap/js/src/collapse.js";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a href="/">
            <h1>Carros Top</h1>
          </a>

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
            <ul className="navbar-nav offset-md-2 main-menu">
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/products">CATÁLOGO</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
