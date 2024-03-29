import "./CartPriceDetail.css";
import { useContext } from "react";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import { useNavigate } from "react-router-dom";
import { AddressContext } from "../../contexts/AddressContext/AddressContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OrderContext } from "../../contexts/OrderContext/OrderContext";

const CartPriceDetail = ({ checkOut }) => {
  const { cart, setCart } = useContext(CartListContext);
  const { orderAddress, showDeliveryAddress } = useContext(AddressContext);
  const { addOrders, setInfo } = useContext(OrderContext);

  const navigate = useNavigate();
  const price = cart?.reduce(
    (acc, curr) => acc + Number(curr.price) * curr.qty,
    0
  );

  const orders = {
    items: cart?.map((item) => ({
      qty: item.qty,
      title: item.title,
      id: item._id,
    })),
    amount: price - Math.round(price * 0.1),
    address: { ...orderAddress },
  };

  const placeOrder = () => {
    addOrders(orders);
    setCart([]);
    setInfo(3);
  };

  return (
    <div className="cart-price-container">
      <div id="price-detail-header">Price Details</div>
      <div className="price-item-detail">
        <div>
          <span> Your Cart:</span>
          <span className="price-span">
            {cart?.length} {cart?.length > 1 ? "items" : "item"}
          </span>
        </div>

        <div>
          Sub Total: <span className="price-span">&#8377;{price}</span>
        </div>
        <div>
          <span> Discount:</span>

          <span className="price-span">
            {"-"} &#8377;{Math.round(price * 0.1)}
          </span>
        </div>

        <div>
          <span>Total Price:</span>
          <span className="price-span">
            &#8377;{price - Math.round(price * 0.1)}
          </span>
        </div>
      </div>

      {checkOut &&
        (!showDeliveryAddress ? (
          <div className="cart-add-address">Please add address!</div>
        ) : (
          <div className="order-address">
            <div id="order-add-header">Order Address</div>
            <table align="top">
              <tbody>
                <tr>
                  <th className="table-header">Name:</th>
                  <td className="table-data">
                    {orderAddress.firstName} {orderAddress.lastName}
                  </td>
                </tr>
                <tr>
                  <th className="table-header">Phone:</th>
                  <td className="table-data"> {orderAddress.phone}</td>
                </tr>
                <tr>
                  <th className="table-header" valign="top">
                    Address:
                  </th>
                  <td className="table-data">{orderAddress.address}</td>
                </tr>
                <tr>
                  <th className="table-header">City:</th>
                  <td className="table-data"> {orderAddress.city}</td>
                </tr>
                <tr>
                  <th className="table-header">Pin code:</th>
                  <td className="table-data"> {orderAddress.pincode}</td>
                </tr>
                <tr>
                  <th className="table-header">State:</th>
                  <td className="table-data"> {orderAddress.state}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}

      <div className="btn-place-order">
        {!checkOut ? (
          <button
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Check Out
          </button>
        ) : (
          <button
            disabled={cart.length === 0 ? true : false}
            style={{ cursor: cart.length === 0 ? "not-allowed" : "pointer" }}
            onClick={() => {
              showDeliveryAddress
                ? placeOrder() ||
                  navigate("/account") ||
                  toast.success("Your Order is Placed!")
                : toast.info("Please Add Address");
            }}
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
};

export { CartPriceDetail };
