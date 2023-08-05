import { useContext } from "react";
import "./AddressComponent.css";
import { AddressContext } from "../../../contexts/AddressContext/AddressContext";

const AddAddressComponent = () => {
  const {
    setAddress,
    addAddress,
    hideAddAddress,
    setHideAddAddress,
    address,
    resetAddress,
    dummyAddress,
    showEditBtn,
    editAddress,
    setOrderAddress,
    showAddress,
    setShowDeliveryAddress,
  } = useContext(AddressContext);

  const handleAddressChange = (e, keyValue) => {
    const value = e.target.value;
    setAddress({ ...address, [keyValue]: value });
  };
  const handleFirstAddress = (address) => {
    if (showAddress?.length === 0) {
      setOrderAddress(address);
      setShowDeliveryAddress(true);
    }
  };
  return (
    <div className="overlay">
      <div className="address-info" onClick={(e) => e.stopPropagation()}>
        <div id="address-header">
          Address
          <span
            id="cross"
            onClick={() => {
              setHideAddAddress(!hideAddAddress);
            }}
          >
            &#10006;
          </span>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setHideAddAddress(!hideAddAddress);
            showEditBtn ? editAddress(address) : addAddress(address);
            handleFirstAddress(address);
            setAddress(resetAddress);
          }}
        >
          <div className="form-container">
            <input
              required
              type="text"
              value={address.firstName}
              placeholder="First Name"
              onChange={(e) => handleAddressChange(e, "firstName")}
            />
            <input
              required
              type="text"
              value={address.lastName}
              placeholder="Last Name"
              onChange={(e) => handleAddressChange(e, "lastName")}
            />
            <input
              required
              type="text"
              placeholder="Address"
              value={address.address}
              onChange={(e) => handleAddressChange(e, "address")}
            />
            <input
              required
              type="text"
              placeholder="City"
              value={address.city}
              onChange={(e) => handleAddressChange(e, "city")}
            />
            <input
              required
              type="text"
              placeholder="State"
              value={address.state}
              onChange={(e) => handleAddressChange(e, "state")}
            />
            <input
              required
              type="number"
              placeholder="Pin Code"
              value={address.pincode}
              onChange={(e) => handleAddressChange(e, "pincode")}
            />
            <input
              required
              type="tel"
              placeholder="Phone"
              value={address.phone}
              onChange={(e) => handleAddressChange(e, "phone")}
            />
            {showEditBtn ? (
              <button className="add-address">Update Address</button>
            ) : (
              <button className="add-address">Add Address</button>
            )}
          </div>
        </form>
        <button
          className="add-address"
          id="dummy-add-btn"
          onClick={() => setAddress(dummyAddress)}
        >
          Dummy Address
        </button>
      </div>
    </div>
  );
};

export { AddAddressComponent };
