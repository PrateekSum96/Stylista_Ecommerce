import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddressContext = createContext();
const AddressProvider = ({ children }) => {
  const [showAddress, setShowAddress] = useState([]);

  const [hideAddAddress, setHideAddAddress] = useState(false);
  const [showDeliveryAddress, setShowDeliveryAddress] = useState(false);
  const [showEditBtn, setEditBtn] = useState(false);
  const [orderAddress, setOrderAddress] = useState({});

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  const getAddress = async () => {
    try {
      const response = await fetch("/api/user/address", {
        headers: {
          authorization: localStorage?.getItem("token"),
        },
      });
      const result = await response.json();
      setShowAddress(result.address);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getAddress();
  }, []);

  const addAddress = async () => {
    try {
      const response = await fetch("/api/user/address", {
        method: "POST",
        headers: { authorization: localStorage?.getItem("token") },
        body: JSON.stringify({ address }),
      });
      const result = await response.json();
      toast("New address added!");
      setShowAddress(result.address);
    } catch (e) {
      console.error(e);
    }
  };

  const removeAddress = async (address) => {
    try {
      const response = await fetch(`/api/user/address/${address._id}`, {
        method: "DELETE",
        headers: {
          authorization: localStorage?.getItem("token"),
        },
      });

      const result = await response.json();
      toast("Address Removed!");
      setShowAddress(result.address);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const editAddress = async (address) => {
    try {
      const response = await fetch(`/api/user/address/${address._id}`, {
        method: "POST",
        headers: {
          authorization: localStorage?.getItem("token"),
        },
        body: JSON.stringify({ address }),
      });

      const result = await response.json();
      toast("Address updated!");
      setShowAddress(result.address);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const resetAddress = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  };
  const dummyAddress = {
    firstName: "John",
    lastName: "Jacob",
    address: "House No-55, Fraser Road",
    city: "Mumbai",
    state: "Maharastra",
    pincode: "400001",
    phone: "1234567890",
  };

  return (
    <AddressContext.Provider
      value={{
        addAddress,
        address,
        setAddress,
        showAddress,
        hideAddAddress,
        setHideAddAddress,
        removeAddress,
        editAddress,
        resetAddress,
        dummyAddress,
        showEditBtn,
        setEditBtn,
        setShowAddress,
        getAddress,
        orderAddress,
        setOrderAddress,
        showDeliveryAddress,
        setShowDeliveryAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export { AddressContext, AddressProvider };
