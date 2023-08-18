import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Auth/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [showWishList, setWishList] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);
  const [wishListLoader, setWishListLoader] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const wishlistToShow = async () => {
    setWishListLoader(true);
    try {
      const response = await fetch("/api/user/wishlist", {
        headers: { authorization: localStorage?.getItem("token") },
      });
      const result = await response.json();

      setWishList(result?.wishlist);
      setWishListLoader(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    wishlistToShow();
  }, []);

  const addToWishList = async (item) => {
    setWishListLoader(true);
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          authorization: localStorage?.getItem("token"),
        },
        body: JSON.stringify({ product: item }),
      });

      const result = await response.json();
      toast.success("Added to Wishlist");
      setWishList(result?.wishlist);
      setWishListLoader(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const btnClickWishList = (item) => {
    if (!isLoggedIn) {
      toast.error("Please login to continue!");
      navigate("/login", {
        state: { from: location },
        replace: true,
      });
    } else {
      return showWishList?.find((wishListItem) => wishListItem.id === item.id)
        ? ""
        : addToWishList(item);
    }
  };

  const removeFromWishlist = async (item) => {
    try {
      const response = await fetch(`/api/user/wishlist/${item._id}`, {
        method: "DELETE",
        headers: {
          authorization: localStorage?.getItem("token"),
        },
      });

      const result = await response.json();
      toast.success("Removed from wishlist");
      setWishList(result?.wishlist);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <WishListContext.Provider
      value={{
        addToWishList,
        showWishList,
        btnClickWishList,
        removeFromWishlist,
        setWishList,
        wishlistToShow,
        wishListLoader,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};
