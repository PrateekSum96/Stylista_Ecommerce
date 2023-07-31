import { useNavigate } from "react-router";
import "./OrderSummery.css";

export const OrderSummery = () => {
  const navigate = useNavigate();
  setTimeout(() => navigate("/"), 2000);

  return (
    <div className="order-summery">
      <h1>Your Order is placed!</h1>
    </div>
  );
};
