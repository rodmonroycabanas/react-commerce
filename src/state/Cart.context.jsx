import { createContext, useContext, useEffect, useState, useMemo } from "react";
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
 
   //buscaritem
  const itemInCart = (id) => cart.find((product) => product.id === id);
  // AÑADIR
  const addProduct = (item, qty) => {
    
    const element = itemInCart(item.id);
    if (!element) return setCart([...cart, { ...item, qty }]);
    
    const newCart = cart.map((product) =>
      product.id === item.id ? { ...product, qty: product.qty + qty } : product
    );
    setCart(newCart);
  };
  //ELIMINAR
  const removeProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };
  //LIMPIAR
  const cleanCart = () => setCart([]);

  //Total Items
  //useMemo TODO comentar
  const getCartQty = useMemo(() => cart.reduce((acc, item) => acc + item.qty, 0),[cart]);

  //Precio Total
  const getTotalPrice = useMemo(() =>
    cart.reduce((acc, item) => acc + item.price * item.qty, 0),[cart]);

  const value = {
    cart,
    addProduct,
    removeProduct,
    cleanCart,
    getCartQty,
    getTotalPrice,
    itemInCart
  };

  return (
    <CartContext.Provider value={value} displayName="CartContext">
      {children}
    </CartContext.Provider>
  );
};