import { useState, useEffect } from "react";
import { getProds } from "../lib/prods.requests";
import { ItemListContainer, Loader } from "../components";

export const Home = () => {
  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {

   getProds() 
    .then(res => {
      setIsLoading(false); 
      setProducts(res)} 
      
      ) 

  }, []);



  return (
    <div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <ItemListContainer products={products} />
        </div>
      )}
    </div>
  );
};