import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const LogIn = () => {
  const [passwordType, setPasswordType] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const showPassword = () => {
    setPasswordType(() => !passwordType);
  };
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
  };
  console.log(passwordType);
  return (
    <div>
      <div className="signIn-card">
        <h2>Sign In</h2>
        <div className="email-signIn">
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" />
        </div>
        <div className="password-signIn">
          <label htmlFor="password">Password</label>
          <br />
          <input type={passwordType ? "text" : "password"} id="password" />
          <div className="signin-icon">
            <i
              class={`fa-solid ${passwordType ? "fa-eye-slash" : "fa-eye"}`}
              onClick={showPassword}
            ></i>
          </div>
        </div>
        <div className="btn-signIn">
          <button>Log In</button>
          <button onClick={handleClick}>Login As a Guest</button>
        </div>
        <div className="signUp-signIn">
          Don't have an account?<NavLink to="/signup">sign up</NavLink>
        </div>
      </div>
    </div>
  );
};
