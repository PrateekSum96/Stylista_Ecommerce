import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import "./Account.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Account = () => {
  const { isLoggedIn, setIsLoggedIn, setPersonInfo } = useContext(AuthContext);

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
