import { Item } from "../Item/Item";
import "./ItemListContainer.css";

export const ItemListContainer = ({ products }) => (
    <div className="item-list">
        {products.map((product) => (
            <Item
            key={product.id}
            // normal...
            img={product.img}
            category={product.category}
            title={product.title}
            price={product.price}
            />
        ))}
    </div>
);