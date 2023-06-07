import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Auth/AuthContext";

export const CartListContext = createContext();

export const CartListProvider = ({ children }) => {
  const token = localStorage?.getItem("token");
  const { isLoggedIn } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
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
      toast("Added to cart");
      console.log(result);
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
      toast("Removed from cart");
      setCart(result.cart);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const btnClick = (item) => {
    if (!isLoggedIn) {
      toast("Please login to continue!");
    } else {
      return cart?.find((cartItem) => cartItem.id === item.id)
        ? ""
        : addToCart(item);
    }
  };

  //   console.log(cart);
  return (
    <CartListContext.Provider
      value={{ addToCart, cart, removeFromCart, btnClick }}
    >
      {children}
    </CartListContext.Provider>
  );
};
