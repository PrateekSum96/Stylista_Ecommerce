import { NavLink } from "react-router-dom";
import "./Login.css";

export const LogIn = () => {
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
          <input type="password" id="password" />
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
