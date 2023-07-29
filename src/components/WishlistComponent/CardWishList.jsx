import "./CardWishList.css";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import { WishListContext } from "../../contexts/CartContext/WishListContext";

const CardWishList = (item) => {
  const { btnClick, cart } = useContext(CartListContext);
  const { removeFromWishlist } = useContext(WishListContext);

  const findInCart = (item) => {
    return cart?.find((cartItem) => cartItem.id === item.id);
  };

  return (
    <div className="wishList-card">
      <NavLink to={`/productDetail/${item.id}`}>
        <img src={item.image_url} alt={item.description} />
      </NavLink>

      <div className="wishlist-info">
        <div id="wishlist-item-title">{item.title}</div>
        <div id="wishlist-item-description">{item.description}</div>
        <div className="wishlist-item-price">
          <span>&#8377;{item.price}</span>
          <span id="original-price">&#8377;{item.original_price}</span>
        </div>
      </div>
      <div className="wishlist-btn">
        <button
          onClick={() => btnClick(item)}
          style={{
            backgroundColor: findInCart(item)
              ? "black"
              : " var(--primary-color)",
          }}
        >
          {findInCart(item) ? (
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
  );
};

export { CardWishList };
