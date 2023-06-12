import { NavLink } from "react-router-dom";
import "./SignUp.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const SignUpComponent = ({ handleSignUp }) => {
  const { personInfo, setPersonInfo } = useContext(AuthContext);
  const { firstName, lastName, email, password, confirmPassword } = personInfo;
  const showPassword = (iconName) => {
    iconName === "icon"
      ? setPersonInfo(({ icon }) => ({ ...personInfo, icon: !icon }))
      : setPersonInfo(({ confirmIcon }) => ({
          ...personInfo,
          confirmIcon: !confirmIcon,
        }));
  };

  return (
    <>
      <div className="signUp-card">
        <h2>Sign Up</h2>
        <form
          onSubmit={(e) => {
            handleSignUp();
            e.preventDefault();
          }}
        >
          <div className="signUp-firstName">
            <label htmlFor="first-name">First Name</label>

            <input
              onChange={(e) =>
                setPersonInfo(({ firstName }) => ({
                  ...personInfo,
                  firstName: e.target.value,
                }))
              }
              type="text"
              id="first-name"
              value={firstName}
              required
            />
          </div>
          <div className="signUp-lastName">
            <label htmlFor="last-name">Last Name</label>

            <input
              onChange={(e) =>
                setPersonInfo(({ lastName }) => ({
                  ...personInfo,
                  lastName: e.target.value,
                }))
              }
              type="text"
              id="last-name"
              value={lastName}
              required
            />
          </div>
          <div className="email-signUp">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) =>
                setPersonInfo(({ email }) => ({
                  ...personInfo,
                  email: e.target.value,
                }))
              }
              type="email"
              id="email"
              value={email}
              required
            />
          </div>

          <div className="password-signUp">
            <label htmlFor="password">Password</label>
            <input
              type={personInfo.icon ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) =>
                setPersonInfo(({ password }) => ({
                  ...personInfo,
                  password: e.target.value,
                }))
              }
              required
            />
            <div className="signup-icon">
              <i
                class={`fa-solid ${
                  personInfo.icon ? "fa-eye-slash" : "fa-eye"
                }`}
                onClick={() => showPassword("icon")}
              ></i>
            </div>
          </div>

          <div className="password-signUp">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type={personInfo.confirmIcon ? "text" : "password"}
              id="confirmPassword"
              onChange={(e) =>
                setPersonInfo(({ confirmPassword }) => ({
                  ...personInfo,
                  confirmPassword: e.target.value,
                }))
              }
              value={confirmPassword}
              required
            />
            <div className="signup-icon">
              <i
                class={`fa-solid ${
                  personInfo.confirmIcon ? "fa-eye-slash" : "fa-eye"
                }`}
                onClick={() => showPassword("confirmIcon")}
              ></i>
            </div>
          </div>

          <div className="btn-signUp">
            <button type="submit">Create New Account</button>
          </div>
          <div className="signUp">
            Already have an account?<NavLink to="/login">Log In</NavLink>
          </div>
        </form>
      </div>
    </>
  );
};
