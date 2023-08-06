import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Auth/AuthContext";

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [showWishList, setWishList] = useState([]);
  const { isLoggedIn } = useContext(AuthContext);
  const [wishListLoader, setWishListLoader] = useState(true);

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
      toast("Please login to continue!");
    } else {
      return showWishList?.find((wishListItem) => wishListItem.id === item.id)
        ? ""
        : addToWishList(item);
    }
  };

  const removeFromWishlist = async (item) => {
    setWishListLoader(true);
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
      setWishListLoader(false);
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
