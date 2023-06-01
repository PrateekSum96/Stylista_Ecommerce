import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showItem, setItem] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/products");
        const jsonData = await response.json();
        setItem(jsonData.products);
      } catch (e) {
        console.error(e);
      }
    };
    getData();
  }, []);

  return (
    <>
      <CartContext.Provider value={{ showItem }}>
        {children}
      </CartContext.Provider>
    </>
  );
};
