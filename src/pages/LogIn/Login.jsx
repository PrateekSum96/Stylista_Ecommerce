import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LogIn = () => {
  const [passwordType, setPasswordType] = useState(false);
  // const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const showPassword = () => {
    setPasswordType(() => !passwordType);
  };
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      toast.success("Logout successful!!");
      setIsLoggedIn(false);
    } else {
      try {
        const cred = { email: "johnJacob@stylista.com", password: "johnJocob" };
        const response = await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify(cred),
        });
        setIsLoggedIn(true);
        navigate(location?.state?.from?.pathname);
        const data = await response.json();
        console.log(data);
        toast.success("Login successful!!");
        localStorage.setItem("token", data.encodedToken);
        console.log(localStorage.getItem("token", data.encodedToken));
      } catch (e) {
        setIsLoggedIn(false);
        console.error(e);
      }
    }
    // setIsLoggedIn(!isLoggedIn);
    //
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
          <button onClick={handleClick}>
            {isLoggedIn ? "Log out" : "Login As a Guest"}
          </button>
        </div>
        <div className="signUp-signIn">
          Don't have an account?<NavLink to="/signup">sign up</NavLink>
        </div>
      </div>
    </div>
  );
};
