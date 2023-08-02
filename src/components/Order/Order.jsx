import { useContext } from "react";
import { OrderContext } from "../../contexts/OrderContext/OrderContext";
import "./Order.css";
import { useNavigate } from "react-router";

const OrderCard = () => {
  const navigate = useNavigate();
  const { orders, addOrders } = useContext(OrderContext);

  return (
    <div>
      <h2 className="order-header">Orders</h2>
      {orders?.length === 0 && (
        <div className="no-order">
          You haven't ordered anything.
          <button
            id="btn-in-order"
            onClick={() => {
              navigate("/productList");
              addOrders();
            }}
          >
            Shop Now
          </button>
        </div>
      )}

      <div>
        {orders?.map(({ address, amount, items, _id }) => (
          <div key={_id} className="order-container">
            <table>
              <tbody>
                <tr>
                  <td className="title-info" valign="top">
                    Order ID:
                  </td>
                  <td className="info">{_id}</td>
                </tr>
                <tr>
                  <td className="title-info" valign="top">
                    Items:
                  </td>
                  <td className="info">
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th className="order-item-qty">Qty.</th>
                        </tr>
                      </thead>
                      {items.map((item) => (
                        <div key={item._id}>
                          <tbody>
                            <tr>
                              <td className="order-item-qty">{item.title}</td>
                              <td> {item.qty}</td>
                            </tr>
                          </tbody>
                        </div>
                      ))}
                    </table>
                  </td>
                </tr>
                <tr>
                  <td className="title-info" valign="top">
                    Total Amount:
                  </td>
                  <td className="info">&#8377;{amount}</td>
                </tr>
                <tr>
                  <td className="title-info" valign="top">
                    Address:
                  </td>
                  <td className="info">
                    <div>
                      {address.firstName} {address.lastName}
                    </div>
                    <div>{address.phone}</div>
                    <div>{address.address}</div>
                    <div>
                      {address.city}, {address.pincode}
                    </div>
                    <div>{address.state}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export { OrderCard };
