import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import "./Account.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import { WishListContext } from "../../contexts/CartContext/WishListContext";

export const Account = () => {
  const { isLoggedIn, setIsLoggedIn, setPersonInfo } = useContext(AuthContext);
  const { setCart } = useContext(CartListContext);
  const { setWishList } = useContext(WishListContext);

  const handleLogout = () => {
    localStorage.removeItem("token");

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
    toast.success("Logout successful");
  };
  return (
    <div className="account">
      <h1>You are logged in!!!</h1>
      <button onClick={handleLogout} className="account-btn">
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};
