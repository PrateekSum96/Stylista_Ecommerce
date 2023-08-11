import "./Account.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react";

import { AuthContext } from "../../contexts/Auth/AuthContext";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import { WishListContext } from "../../contexts/CartContext/WishListContext";
import { AddAddressComponent } from "../../components/AccountComponent/Address/AddAddressComponent";
import { ShowAddressComponent } from "../../components/AccountComponent/Address/ShowAddressComponent";
import { AddressContext } from "../../contexts/AddressContext/AddressContext";
import { OrderCard } from "../../components/Order/Order";
import { OrderContext } from "../../contexts/OrderContext/OrderContext";

export const Account = () => {
  const { isLoggedIn, setIsLoggedIn, setPersonInfo, userDetail } =
    useContext(AuthContext);
  const { setCart } = useContext(CartListContext);
  const { setWishList } = useContext(WishListContext);
  const { hideAddAddress, setShowAddress, getAddress } =
    useContext(AddressContext);
  const { info, setInfo, getOrders } = useContext(OrderContext);

  useEffect(() => {
    if (isLoggedIn) {
      getAddress();
      getOrders();
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("foundUser");
    setIsLoggedIn(false);

    setPersonInfo({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setCart(() => []);
    setWishList(() => []);
    setShowAddress(() => []);
    toast.success("Logout successful");
  };
  return (
    <div className="account">
      <h1 id="account-header">Account</h1>
      <h1 id="account-user-msg">Welcome, {userDetail?.firstName} </h1>
      <div className="info-selector">
        <span
          className={`info-toggle ${info === 1 && "active-info"}`}
          onClick={() => setInfo(1)}
        >
          Profile Info
        </span>
        <span
          className={`info-toggle ${info === 2 && "active-info"}`}
          onClick={() => setInfo(2)}
        >
          Address
        </span>
        <span
          className={`info-toggle ${info === 3 && "active-info"}`}
          onClick={() => setInfo(3)}
        >
          Orders
        </span>
      </div>
      {info === 1 && (
        <div className="account-card">
          <div>
            <span>Name: </span>
            {userDetail?.firstName} {userDetail?.lastName}
          </div>
          <div>
            <span>Email: </span>
            {userDetail?.email}
          </div>
          <div className="account-btn-container">
            <button onClick={handleLogout} className="account-btn">
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      )}

      {info === 2 && (
        <div className="account-address-info">
          <ShowAddressComponent />
          {hideAddAddress && <AddAddressComponent />}
        </div>
      )}

      {info === 3 && (
        <div className="order-info">
          <OrderCard />
        </div>
      )}
    </div>
  );
};
