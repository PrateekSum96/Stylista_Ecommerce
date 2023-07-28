import "./CartPriceDetail.css";
import { useContext } from "react";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import { NavLink } from "react-router-dom";
import { AddressContext } from "../../contexts/AddressContext/AddressContext";

const CartPriceDetail = ({ checkOut }) => {
  const { cart } = useContext(CartListContext);
  const { orderAddress, hideAddAddress } = useContext(AddressContext);
  console.log(orderAddress);

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
          <span className="price-span">
            {cart?.length} {cart?.length > 1 ? "items" : "item"}
          </span>
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

      {checkOut && (
        <div className="order-address">
          <div id="order-add-header">Order Address</div>
          <table align="top">
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
          </table>
        </div>
      )}

      <div className="btn-place-order">
        {!checkOut ? (
          <NavLink to="/checkout">
            <button>Check Out</button>
          </NavLink>
        ) : (
          <NavLink to="/ordersummery">
            <button
              disabled={cart.length === 0 ? true : false}
              style={{ cursor: cart.length === 0 ? "not-allowed" : "pointer" }}
            >
              Place Order
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export { CartPriceDetail };
