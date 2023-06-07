import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import "./Account.css";

export const Account = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const handleClick = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  return (
    <div className="account">
      <h1>You are logged in!!!</h1>
      <button onClick={handleClick} className="account-btn">
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};
