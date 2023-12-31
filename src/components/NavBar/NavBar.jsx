import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";

import { NavLink, Outlet } from "react-router-dom";

export const NavBar = () => {
  const logo = "https://www.aitaikuji.com/static/version1691023070/frontend/Aitaikuji/Custom/en_US/images/logo.svg";
  return (
    <>
    <header className="navbar">
      <div className="container">
        <div className="navbar__content">
          <NavLink to="/">
            <img className="navbar__logo" src={logo}/>
          </NavLink>
          
          <nav className="navbar__items">
            <NavLink
                to={"/category/Banpresto"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "rgb(255, 255, 250)",
                })}
              >                Banpresto
              </NavLink>
              <NavLink
                to={"/category/Bandai"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "rgb(255, 255, 250)",
                })}
              >                Bandai
              </NavLink>
              
          </nav>
            <CartWidget />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};