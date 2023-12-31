import { BsFillBagFill } from "react-icons/bs";
import "./CartWidget.css";
import { useCartContext } from "../../state/Cart.context";
import { useNavigate } from "react-router-dom";

export const CartWidget = () => {
  const { getCartQty } = useCartContext();
  const navigate = useNavigate();
  return (
    <div className="cart-widget" onClick={() => navigate("/cart")}>
      <BsFillBagFill />{getCartQty ?  <span className="cart-widget__qty">({getCartQty})</span> : null}
    </div>
  );
};