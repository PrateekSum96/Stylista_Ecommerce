import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const CartListContext = createContext();

export const CartListProvider = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [cartLoader, setCartLoader] = useState(true);
  const navigate = useNavigate();

  const cartToShow = async () => {
    setCartLoader(true);
    try {
      const response = await fetch("/api/user/cart", {
        headers: {
          authorization: localStorage?.getItem("token"),
        },
      });
      const result = await response.json();
      setCart(result?.cart);
      setCartLoader(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    cartToShow();
  }, []);

  const addToCart = async (item) => {
    setCartLoader(true);
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
      setCartLoader(false);
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
      toast.error("Please login to continue!");

      navigate("/login");
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
        cartLoader,
      }}
    >
      {children}
    </CartListContext.Provider>
  );
};
