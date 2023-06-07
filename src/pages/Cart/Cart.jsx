import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import "./Cart.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WishListContext } from "../../contexts/CartContext/WishListContext";

export const Cart = () => {
  const { cart, removeFromCart } = useContext(CartListContext);
  const { showWishList, btnClickWishList } = useContext(WishListContext);

  console.log("cart", cart);
  return (
    <div>
      <div>
        {cart.length === 0 ? (
          <h1 id="cart-empty-msg">Your cart is empty!!</h1>
        ) : (
          cart?.map(
            (cartItem) => (
              //
              <div className="cart-card">
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
          )
        )}
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
    </div>
  );
};
