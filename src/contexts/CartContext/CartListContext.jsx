import { createContext, useState } from "react";

export const CartListContext = createContext();

export const CartListProvider = ({ children }) => {
  const token = localStorage?.getItem("token");
  const [cart, setCart] = useState([]);
  const addToCart = async (item) => {
    try {
      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: JSON.stringify({ product: item }),
      });

      const result = await response.json();
      //   console.log(result);
      setCart(result.cart);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const removeFromCart = async (cartItem) => {
    console.log(cartItem);
    try {
      const response = await fetch(`/api/user/cart/${cartItem._id}`, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      });

      const result = await response.json();
      console.log(result);
      setCart(result.cart);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  //   console.log(cart);
  return (
    <CartListContext.Provider value={{ addToCart, cart, removeFromCart }}>
      {children}
    </CartListContext.Provider>
  );
};