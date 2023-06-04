import { NavLink } from "react-router-dom";
import "./SignUp.css";

export const SignUp = () => {
  return (
    <div>
      <div className="signUp-card">
        <h2>Sign Up</h2>
        <div className="signUp-firstName">
          <label htmlFor="first-name">First Name</label>
          <br />
          <input type="text" id="first-name" />
        </div>
        <div className="signUp-lastName">
          <label htmlFor="last-name">Last Name</label>
          <br />
          <input type="text" id="last-name" />
        </div>
        <div className="email-signUp">
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" />
        </div>
        <div className="password-signUp">
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" id="password" />
        </div>
        <div className="btn-signUp">
          <button>Create New Account</button>
        </div>
        <div className="signUp">
          Already have an account?<NavLink to="/login">Log In</NavLink>
        </div>
      </div>
    </div>
  );
};
