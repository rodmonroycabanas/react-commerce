import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  const logo = "https://funko.com/on/demandware.static/Sites-FunkoUS-Site/-/default/dw2acc256f/images/funko/svg/site-logo.svg";
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar__content"
        >
          <img
            className="navbar__logo"
            src={logo}
          />
          <nav className="navbar__items">
            <a>Inicio</a>
            <a>Por marca</a>
            <a>Por serie</a>
            <a>Descuentos</a>
          </nav>
          <CartWidget />
        </div>
      </div>
    </header>
  );
};