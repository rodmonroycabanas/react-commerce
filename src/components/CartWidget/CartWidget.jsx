import { BsFillBagFill } from "react-icons/bs";

import "./CartWidget.css";

export const CartWidget = () => (
  <div className="cart-widget">
    <BsFillBagFill /> <span className="cart-widget__qty">(3)</span>
  </div>
);