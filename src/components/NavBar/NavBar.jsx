import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
      <header className="navbar">
        <div className="container">
          <div className="navbar__content"
          >
            <img
              className="navbar__logo"
              src={
                "https://assetspwa.liverpool.com.mx/assets/images/logos/liverpool-logo.svg"
              }
            />
            <nav className="navbar__items">
              <a>Deportes</a>
              <a>Electronica</a>
              <a>Muebles</a>
              <a>Linea Blanca</a>
            </nav>
            <CartWidget />
          </div>
        </div>
      </header>
    );
  };