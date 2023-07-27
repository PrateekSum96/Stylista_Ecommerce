import "./Cart.css";

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import { CartItemList } from "../../components/Cart/CartItemComponent";
import { CartPriceDetail } from "../../components/Cart/CartPriceDetail";

export const Cart = () => {
  const { cart } = useContext(CartListContext);
  return (
    <div>
      <div className="cart-page">
        {cart?.length === 0 ? (
          <div id="cart-empty-msg">
            {
              <div>
                <h1>Your cart is empty!</h1>
                <NavLink to="/productList" id="to-productList">
                  <button id="btn-to-productList">Shop Now </button>
                </NavLink>
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
    </div>
  );
};
