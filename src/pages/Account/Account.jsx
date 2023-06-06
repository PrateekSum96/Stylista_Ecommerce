import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Account = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const handleClick = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleClick}>{isLoggedIn ? "Logout" : "Login"}</button>
      <h1>This is account</h1>
    </div>
  );
};
