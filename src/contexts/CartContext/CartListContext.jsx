import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Auth/AuthContext";

export const CartListContext = createContext();

export const CartListProvider = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  const [cart, setCart] = useState([]);

  const cartToShow = async () => {
    try {
      const response = await fetch("/api/user/cart", {
        headers: {
          authorization: localStorage?.getItem("token"),
        },
      });
      const result = await response.json();
      setCart(result?.cart);
    } catch (e) {
      console.error(e);
    }
  };

  const addToCart = async (item) => {
    try {
      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: localStorage?.getItem("token"),
        },
        body: JSON.stringify({ product: item }),
      });

      const result = await response.json();
      toast.success("Added to cart");
      setCart(result?.cart);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const removeFromCart = async (cartItem) => {
    try {
      const response = await fetch(`/api/user/cart/${cartItem._id}`, {
        method: "DELETE",
        headers: {
          authorization: localStorage?.getItem("token"),
        },
      });

      const result = await response.json();
      toast.success("Removed from cart");
      setCart(result?.cart);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const btnClick = (item) => {
    if (!isLoggedIn) {
      toast.info("Please login to continue!");
    } else {
      return cart?.find((cartItem) => cartItem.id === item.id)
        ? ""
        : addToCart(item);
    }
  };
  const incrementProduct = async (cartItem) => {
    try {
      const response = await fetch(`/api/user/cart/${cartItem._id}`, {
        method: "POST",
        headers: { authorization: localStorage?.getItem("token") },
        body: JSON.stringify({ action: { type: "increment" } }),
      });
      const result = await response.json();

      setCart(result.cart);
    } catch (e) {
      console.error(e);
    }
  };
  const decrementProduct = async (cartItem) => {
    try {
      const response = await fetch(`/api/user/cart/${cartItem._id}`, {
        method: "POST",
        headers: { authorization: localStorage?.getItem("token") },
        body: JSON.stringify({ action: { type: "decrement" } }),
      });
      const result = await response.json();

      setCart(result.cart);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <CartListContext.Provider
      value={{
        addToCart,
        cart,
        removeFromCart,
        btnClick,
        setCart,
        cartToShow,
        incrementProduct,
        decrementProduct,
      }}
    >
      {children}
    </CartListContext.Provider>
  );
};
