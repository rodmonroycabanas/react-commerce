import { useEffect, useState } from "react";
import { ItemCount } from "../components";
import { getProd } from "../lib/prods.requests";

export const Detail = () => {
  const [prod, setProd] = useState({});

  useEffect(() => {
    //Peticion detalle producto
    getProd().then((res) => {
      //Se guarda el producto del objeto
      setProd(res);
    });
  }, []);

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
            {(prod.price || 0).toLocaleString("es-CO", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>

          <span className="detail__info-stock">¡Quedan solo {prod.stock}!</span>

          <ItemCount stock={prod.stock} onAdd={() => alert("Comprados")} />
        </div>
      </div>
    </div>
  );
};