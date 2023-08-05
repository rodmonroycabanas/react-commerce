import { Item } from "../Item/Item";
import "./ItemListContainer.css";

//export const ItemListContainer = ({ products }) => (
//    <div className="item-list">
//        {products.map((product) => (
//            <Item
//            key={product.id}
//            // normal...
//            img={product.img}
//            category={product.category}
//            title={product.title}
//            price={product.price}
//            />
//        ))}
//    </div>
//);
export const ItemListContainer = ({ products, loading = false }) => (
    <div className="item-list">
      {loading ? (
        <>
          <div className="skeleton">
            <div className="skeleton__img"></div>
          </div>
          <div className="skeleton">
            <div className="skeleton__img"></div>
          </div>
          <div className="skeleton">
            <div className="skeleton__img"></div>
          </div>
        </>
      ) : (
        products.map((product) => (
          <Item
            key={product.id}
            // Normal
            id={product.id}
            img={product.img}
            category={product.category}
            title={product.title}
            price={product.price}
            // {...product}
          />
        ))
      )}
    </div>
  );