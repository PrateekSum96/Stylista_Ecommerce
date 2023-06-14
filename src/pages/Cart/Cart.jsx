import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import "./Cart.css";

import { WishListContext } from "../../contexts/CartContext/WishListContext";

export const Cart = () => {
  const { cart, removeFromCart } = useContext(CartListContext);
  const { showWishList, btnClickWishList } = useContext(WishListContext);

  const totalPrice = cart?.reduce((acc, curr) => acc + Number(curr.price), 0);

  return (
    <div>
      <div>
        {cart?.length === 0 ? (
          <h1 id="cart-empty-msg">Your cart is empty!!</h1>
        ) : (
          ""
        )}
      </div>

      <div className="cart-container">
        <div>
          {cart?.map(
            (cartItem) => (
              //
              <div className="cart-card" key={cartItem.id}>
                <img src={cartItem.image_url} alt={cartItem.title} />
                <div className="cart-info">
                  <div className="cart-title">{cartItem.title}</div>
                  <div className="cart-description">{cartItem.description}</div>
                  <div className="cart-price">
                    <div>&#8377;{cartItem.price}</div>
                    <div className="cart-original-price">
                      &#8377;{cartItem.original_price}
                    </div>
                  </div>
                  <div className="cart-btn">
                    <button onClick={() => removeFromCart(cartItem)}>
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
            )
            //
          )}
        </div>
        <div className="cart-checklist-info">
          <div>Your Cart: {cart?.length} items</div>
          <hr />
          <div>Sub Total: &#8377;{totalPrice}</div>
          <div>Discount: &#8377;{Math.round(totalPrice * 0.1)}</div>
          <hr />
          <div>
            Total Price: &#8377;{totalPrice - Math.round(totalPrice * 0.1)}
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};
