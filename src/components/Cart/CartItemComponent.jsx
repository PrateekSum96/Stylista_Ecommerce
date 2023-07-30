import "./CartItemComponent.css";

import { useContext } from "react";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import { WishListContext } from "../../contexts/CartContext/WishListContext";
import { NavLink } from "react-router-dom";

const CartItemList = () => {
  const { cart, removeFromCart, incrementProduct, decrementProduct } =
    useContext(CartListContext);
  const { showWishList, btnClickWishList } = useContext(WishListContext);
  const discount = ({ price, original_price }) => {
    const percentageDiscount = Math.floor(
      ((original_price - price) / original_price) * 100
    );
    return percentageDiscount;
  };

  return (
    <div className="cart-item-container">
      {cart?.map((cartItem) => (
        <div key={cartItem._id}>
          <div className="cart-item-card">
            <div className="cart-item-image">
              <img src={cartItem.image_url} alt={cartItem.title} />
            </div>
            <div className="cart-item-detail">
              <div className="cart-item-title">{cartItem.title}</div>
              <div className="cart-item-description">
                {cartItem.description}
              </div>
              <div className="cart-item-price">
                <span id="new-price"> &#8377;{cartItem.price}</span>
                <span id="old-price">&#8377;{cartItem.original_price}</span>
              </div>
              <div id="discount"> {discount(cartItem)}% OFF</div>
              <div className="inc-dec-quantity">
                <span className="quantity-tag">Quantity:</span>
                <button
                  className="inc-dec-btn"
                  disabled={cartItem?.qty < 1 ? true : false}
                  onClick={() => {
                    cartItem.qty <= 1
                      ? removeFromCart(cartItem)
                      : decrementProduct(cartItem);
                  }}
                >
                  -
                </button>
                <span>{cartItem.qty}</span>
                <button
                  className="inc-dec-btn"
                  onClick={() => incrementProduct(cartItem)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-btn">
                <button
                  onClick={() => removeFromCart(cartItem)}
                  id="remove-to-cart-btn"
                >
                  Remove from Cart
                </button>
                <button
                  onClick={() => btnClickWishList(cartItem)}
                  id="wishlist-btn"
                >
                  {showWishList?.find(
                    (wishListItem) => wishListItem.id === cartItem.id
                  ) ? (
                    <NavLink to="/wishList" className="nav-link">
                      Go to Wishlist
                    </NavLink>
                  ) : (
                    "Add to WishList"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { CartItemList };
