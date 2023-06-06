import { useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { Navigate, useLocation } from "react-router";

export const RequireAuth = ({ children }) => {
  const token = localStorage?.getItem("token");
  const location = useLocation();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  if (token !== null) {
    setIsLoggedIn(true);
  }
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
