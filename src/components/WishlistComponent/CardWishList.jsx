import "./CardWishList.css";

import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import { WishListContext } from "../../contexts/CartContext/WishListContext";

const CardWishList = (item) => {
  const { btnClick, cart } = useContext(CartListContext);
  const { removeFromWishlist } = useContext(WishListContext);
  const navigate = useNavigate();

  const findInCart = (item) => {
    return cart?.find((cartItem) => cartItem.id === item.id);
  };

  return (
    <div className="wishList-card">
      <Link to={`/productDetail/${item.id}`}>
        <img src={item.image_url} alt={item.description} />
      </Link>

      <div className="wishlist-info">
        <div id="wishlist-item-title">{item.title}</div>
        <div id="wishlist-item-description">{item.description}</div>
        <div className="wishlist-item-price">
          <span>&#8377;{item.price}</span>
          <span id="original-price">&#8377;{item.original_price}</span>
        </div>
      </div>
      <div className="wishlist-btn">
        {findInCart(item) ? (
          <button onClick={() => navigate("/cart")} id="add-to-cart-btn">
            Go to Cart
          </button>
        ) : (
          <button
            onClick={() => {
              btnClick(item);
            }}
            id="add-to-cart-btn"
          >
            Add to cart
          </button>
        )}
        <button onClick={() => removeFromWishlist(item)}>
          Remove from wishlist
        </button>
      </div>
    </div>
  );
};

export { CardWishList };
