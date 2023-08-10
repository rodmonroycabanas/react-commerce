import { useEffect, useState, useCallback } from "react";
import { Item, ItemCount, Loader } from "../components";
import { getProd } from "../lib/prods.requests";
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../state/Cart.context";

export const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [prod, setProd] = useState({});

  const { addProduct, itemInCart } = useCartContext();
  //console.log("id " + id)
  //console.log(useParams());
  useEffect(() => {
    getProd(+id).then((res) => {
      if(!res) return navigate('/');
      setProd(res);
    });
  }, []);

  //useCallback //
  /* 
    const funcion = useCallback(() => {},[array de dependencias ])
  */

    const handleAdd = useCallback(
      (qty) => {
        addProduct(prod, qty);
      },
      [addProduct, prod]
    );
  
    if (!Object.keys(prod).length) return <Loader />;
  
  return (
    <div className="container">
      <div className="detail">
        <div className="detail__img">
          <img src={prod.img} />
        </div>
        <div className="detail__info">
          <span className="detail__info-title">{prod.title} </span>

          <p className="detail__info-description">{prod.description}</p>

          <span className="detail__info-price">
            $
            {(prod.price || 0).toLocaleString("es-MX", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
          <span className="detail__info-stock">¡Ultimas piezas!</span>
           

          <ItemCount
            stock={prod.stock - (itemInCart?.(id)?.qty || 0)} 
            onAdd={handleAdd}
          />
        </div>
      </div>
    </div>
  );
};