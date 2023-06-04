import { NavLink } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

export const LogIn = () => {
  const [passwordType, setPasswordType] = useState(false);
  const showPassword = () => {
    setPasswordType(() => !passwordType);
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
          <button>Login As a Guest</button>
        </div>
        <div className="signUp-signIn">
          Don't have an account?<NavLink to="/signup">sign up</NavLink>
        </div>
      </div>
    </div>
  );
};
