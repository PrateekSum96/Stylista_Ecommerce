import "./CheckOut.css";

import { CheckOutAdd } from "../../components/CheckoutComponent/CheckOutAddress/CheckOutAdd";
import { CheckOutPrice } from "../../components/CheckoutComponent/CheckOutPrice/CheckOutPrice";
import { CheckOutItem } from "../../components/CheckoutComponent/CheckoutItem/CheckOutItem";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import { useContext } from "react";

const CheckOut = () => {
  const { cart } = useContext(CartListContext);

  return (
    <div>
      <h1 id="checkout-header">Checkout</h1>
      <div className="checkout">
        <div className="checkout-price-card">
          <CheckOutPrice />
        </div>

        <div className="checkout-card">
          <div className="checkout-item-container">
            <div className="item-header">
              <span>Name</span>
              <span>Quantity</span>
            </div>
            {cart?.map((item) => (
              <CheckOutItem {...item} key={item._id} />
            ))}
          </div>
          <div className="checkout-add">
            <CheckOutAdd />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CheckOut };
