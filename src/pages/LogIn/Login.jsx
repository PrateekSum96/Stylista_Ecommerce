import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const LogIn = () => {
  const [passwordType, setPasswordType] = useState(false);
  const { personInfo, setPersonInfo, handleLogin, setIsLoggedIn, userFound } =
    useContext(AuthContext);
  const { email, password } = personInfo;

  const location = useLocation();
  const navigate = useNavigate();

  let cred;
  const showPassword = () => {
    setPasswordType(() => !passwordType);
  };

  const userLogin = () => {
    cred = { email, password };
    handleLogin(cred);
  };

  const guestLogin = () => {
    cred = { email: "johnJacob@stylista.com", password: "johnJacob" };
    setPersonInfo((info) => ({ ...info, email: cred.email }));
    setPersonInfo((info) => ({ ...info, password: cred.password }));
  };

  useEffect(() => {
    if (!userFound) {
      setIsLoggedIn(false);
    }
    if (localStorage.getItem("token")) {
      if (userFound?.email === "johnJacob@stylista.com") {
        navigate(location?.state?.from?.pathname);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="signIn-card">
        <h2>Sign In</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            userLogin();
          }}
        >
          <div className="email-signIn">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              onChange={(e) =>
                setPersonInfo((info) => ({ ...info, email: e.target.value }))
              }
              value={email}
              required
            />
          </div>

          <div className="password-signIn">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type={passwordType ? "text" : "password"}
              id="password"
              onChange={(e) =>
                setPersonInfo((info) => ({ ...info, password: e.target.value }))
              }
              value={password}
              required
            />

            <div className="signin-icon">
              <i
                class={`fa-solid ${passwordType ? "fa-eye-slash" : "fa-eye"}`}
                onClick={showPassword}
              ></i>
            </div>
          </div>
          <div className="btn-signIn">
            <button type="submit">Log In</button>
            <button onClick={guestLogin}>Login As a Guest</button>
          </div>
          <div className="signUp-signIn">
            Don't have an account?<Link to="/signup">sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
