import { useContext } from "react";
import { AddressContext } from "../../../contexts/AddressContext/AddressContext";
import "./ShowAddressComponent.css";

const ShowAddressComponent = () => {
  const {
    showAddress,
    removeAddress,
    hideAddAddress,
    setHideAddAddress,
    setAddress,
    setEditBtn,
    setOrderAddress,
    orderAddress,

    setShowDeliveryAddress,
  } = useContext(AddressContext);

  const handleChange = (e) => {
    setOrderAddress(JSON.parse(e.target.value));
  };

  return (
    <div className="show-add-container">
      {showAddress?.length === 0 ? (
        <div>
          <h2 id="no-address-msg">Please add address!</h2>
        </div>
      ) : (
        ""
      )}
      <div className="add-new-address">
        <button
          onClick={() => {
            setHideAddAddress(!hideAddAddress);
            setEditBtn(false);
          }}
        >
          Add Address
        </button>
      </div>

      {showAddress?.map((add) => (
        <div className="show-add" key={add._id}>
          <input
            type="radio"
            id={`add${add._id}`}
            name="address"
            defaultChecked={
              orderAddress?._id === add._id || showAddress.length === 1
            }
            value={JSON.stringify(add)}
            onClick={(e) => {
              handleChange(e);
              setShowDeliveryAddress(true);
            }}
          />
          <label htmlFor={`add${add._id}`}>
            <div>
              <span>Name:</span> {add.firstName} {add.lastName}
            </div>
            <div>
              <span>Phone: </span>
              {add.phone}
            </div>
            <div>
              <span>Address: </span>
              {add.address}
            </div>
            <div>
              <span>City: </span>
              {add.city}
            </div>
            <div>
              <span>Pin code: </span>
              {add.pincode}
            </div>
            <div>
              <span>State: </span>
              {add.state}
            </div>

            <div className="show-add-btn">
              <button onClick={() => removeAddress(add)}>Delete</button>
              <button
                onClick={() => {
                  setHideAddAddress(!hideAddAddress);
                  setAddress(add);
                  setEditBtn(true);
                }}
              >
                Edit
              </button>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export { ShowAddressComponent };
