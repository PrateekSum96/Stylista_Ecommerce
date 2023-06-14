import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./WishList.css";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import { WishListContext } from "../../contexts/CartContext/WishListContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const WishListCard = (item) => {
  const { btnClick, cart } = useContext(CartListContext);
  const { removeFromWishlist } = useContext(WishListContext);

  return (
    <>
      <div className="wishList-card">
        <img src={item.image_url} alt={item.description} />
        <div className="wishlist-info">
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>&#8377;{item.price}</div>
          <div id="original-price">&#8377;{item.original_price}</div>
        </div>
        <div className="wishlist-btn">
          <button onClick={() => btnClick(item)}>
            {cart?.find((cartItem) => cartItem.id === item.id) ? (
              <NavLink to="/cart" className="nav-link">
                Go to Cart
              </NavLink>
            ) : (
              "Add to cart"
            )}
          </button>
          <button onClick={() => removeFromWishlist(item)}>
            Remove from wishlist
          </button>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

/*
category: "Men"
createdAt: "2023-06-07T12:34:18+05:30"
delivery_time: "5"
description: "Sea Green solid casual shirt"
details: "Sea Green solid casual shirt, has a spread collar, long sleeves, button placket, curved hem, and 1 patch pocket"
id: "1"
image_url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12918948/2021/2/11/a124b071-8455-4cb2-952b-92cb0791296d1613027227490-Roadster-Men-Grey-Regular-Fit-Solid-Casual-Shirt-41616130272-1.jpg"
in_stock: true
original_price: "1199"
price: "659"
rating: "4.2"
reviews: "4k"
size: "M"
title: "Roadster"
trending: true
updatedAt: "2023-06-07T12:34:18+05:30"
_id: "d9a47eca-3e84-4597-ae88-497ac5299e60"
 */
