const { createContext, useState } = require("react");

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [info, setInfo] = useState(1);

  const getOrders = async () => {
    try {
      const response = await fetch("/api/user/orders", {
        headers: {
          authorization: localStorage?.getItem("token"),
        },
      });
      const result = await response.json();
      setOrders(result.orders);
    } catch (e) {
      console.error(e);
    }
  };

  const addOrders = async (order) => {
    try {
      const response = await fetch("/api/user/orders", {
        method: "POST",
        headers: { authorization: localStorage?.getItem("token") },
        body: JSON.stringify({ order }),
      });

      const result = await response.json();
      setOrders(result.orders);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <OrderContext.Provider
      value={{ orders, setOrders, addOrders, getOrders, info, setInfo }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContext, OrderProvider };
