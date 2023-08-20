import { useEffect, useState } from "react";
import { useCartContext } from "../state/Cart.context";
import { AiOutlineDelete } from "react-icons/ai";
import { addOrder } from "../lib/orders.requests";
import { updateManyProds } from "../lib/prods.requests";
import { Input } from "../components";

const BUY_FORM = [
  { label: "Nombre:", name: "name", placeholder: "nombre completo" },
  { label: "Correo:", name: "email", placeholder: "direccion de correo" },
  { label: "Teléfono:", name: "phone", placeholder: "telefono" },
];

export const Cart = () => {
  const [form, setForm] = useState({});
  const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();
  
  const createOrder = async () => {
    const items = cart.map(({ id, title, qty, price }) => 
    ({id,title,qty,price}));
  
  const { name, phone, email } = form

  useEffect(() => {
    console.log({ cart });
  }, [cart]);

  const order = {
    buyer: { name, phone, email },
    items,
    total: getTotalPrice,
  };

  const id = await addOrder(order);
  console.log(id); //Mostrar ID usuario TAREA <-->

  await updateManyProds(items);

  cleanCart();
};

  const handleChange = ({ target: { value, name } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };


  return (
    <div className="cart">
      <div className="container cart__container">{cart.length ?(
      <>
        <div className="cart__item" style={{ border: "none" }}>
          <button className="cart__item-button" onClick={cleanCart}>
            Vaciar carrito
          </button>
        </div>
        <div className="cart__products">
          <div
            className="cart__item"
            style={{ border: "none", padding: "0 16px" }}
          >
            <span>Producto</span>
            <span>Cantidad</span>
            <span>Precio</span>
            <span>Subtotal</span>
          </div>
          {cart.map((item) => (
            <div className="cart__item" key={item.id}>
              <span>{item.title}</span>

              <span>{item.qty}</span>
              <span>
                $
                {item.price.toLocaleString("es-CO", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </span>
              <span>
                $
                {(item.qty * item.price).toLocaleString("es-CO", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </span>
              <button
                className="cart__item-delete"
                onClick={() => removeProduct(item.id)}
              >
                <AiOutlineDelete />
              </button>
            </div>
          ))}
        </div>
        <div className="cart__item" style={{ border: "none" }}>
          <div className="cart__total">
            <span>Total</span>{" "}
            <span>
              $
              {getTotalPrice.toLocaleString("es-CO", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </span>
          </div>{" "}
          </div>
            <div className="form">
              {BUY_FORM.map((input) => (
                <Input key={input.name} onChange={handleChange} {...input} />
              ))}
              <button
                className="cart__item-button form__button"
                onClick={createOrder}
              >
                Realizar pedido
              </button>
            </div>
          </>
        ) : (
          <h1>EL carrito esta vacio</h1>
        )}
      </div>
    </div>
  );
};