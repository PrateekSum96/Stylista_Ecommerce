import "./Cart.css";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import { CartItemList } from "../../components/Cart/CartItemComponent";
import { CartPriceDetail } from "../../components/Cart/CartPriceDetail";

export const Cart = () => {
  const { cart, cartLoader } = useContext(CartListContext);

  const navigate = useNavigate();
  return (
    <div>
      <h1 id="cart-Header">Cart</h1>
      {cartLoader ? (
        <h1 id="cart-loader">Loading...</h1>
      ) : (
        <div className="cart-page">
          {cart?.length === 0 ? (
            <div id="cart-empty-msg">
              {
                <div>
                  <h1>Your cart is empty!</h1>

                  <button
                    id="btn-to-productList"
                    onClick={() => navigate("/productList")}
                  >
                    Shop Now
                  </button>
                </div>
              }
            </div>
          ) : (
            <div className="cart-layout">
              <CartPriceDetail />

              <CartItemList />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
