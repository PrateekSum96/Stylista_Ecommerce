import { useContext } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { Navigate, useLocation } from "react-router";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
