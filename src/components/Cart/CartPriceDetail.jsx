import "./CartPriceDetail.css";
import { useContext } from "react";
import { CartListContext } from "../../contexts/CartContext/CartListContext";

const CartPriceDetail = () => {
  const { cart } = useContext(CartListContext);

  const totalPrice = cart?.reduce(
    (acc, curr) => acc + Number(curr.price) * curr.qty,
    0
  );
  return (
    <div className="cart-price-container">
      <div id="price-detail-header">Price Details</div>
      <div className="price-item-detail">
        <div>
          <span> Your Cart:</span>
          <span className="price-span">{cart?.length} items</span>
        </div>

        <div>
          Sub Total: <span className="price-span">&#8377;{totalPrice}</span>
        </div>
        <div>
          <span> Discount:</span>

          <span className="price-span">
            &#8377;{Math.round(totalPrice * 0.1)}
          </span>
        </div>

        <div>
          <span>Total Price:</span>
          <span className="price-span">
            &#8377;{totalPrice - Math.round(totalPrice * 0.1)}
          </span>
        </div>
      </div>
      <div className="btn-place-order">
        <button>Place Order</button>
      </div>
    </div>
  );
};

export { CartPriceDetail };