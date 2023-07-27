import "./CheckOutItem.css";

const CheckOutItem = (item) => {
  return (
    <div key={item._id} className="checkout-item">
      <span>{item.title}</span>
      <span id="item-qty">{item.qty}</span>
    </div>
  );
};

export { CheckOutItem };
