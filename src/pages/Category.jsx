import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProds } from "../lib/prods.requests";
import { ItemListContainer } from "../components";

export const Category = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setProducts([]);
    setIsLoading(true);
    getProds(id).then((res) => {
      setIsLoading(false);
      setProducts(res);
    });
  }, [id]);

  return (
    <div>
      <div className="container">
        <ItemListContainer products={products} loading={isLoading}  />
      </div>
    </div>
  );
};