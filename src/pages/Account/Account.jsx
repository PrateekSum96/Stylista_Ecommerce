import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import "./Account.css";

export const Account = () => {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);

  return (
    <div className="account">
      <h1>You are logged in!!!</h1>
      <button onClick={handleLogout} className="account-btn">
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};
