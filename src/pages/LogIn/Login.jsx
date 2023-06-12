import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LogIn = () => {
  const [passwordType, setPasswordType] = useState(false);

  const { setIsLoggedIn, personInfo, setPersonInfo } = useContext(AuthContext);

  const { email, password } = personInfo;

  const showPassword = () => {
    setPasswordType(() => !passwordType);
  };
  const location = useLocation();
  const navigate = useNavigate();
  let cred;

  const userLogin = () => {
    cred = { email: { email }, password: { password } };
    handleLogin();
  };
  const guestLogin = () => {
    cred = { email: "johnJacob@stylista.com", password: "johnJocob" };
    setPersonInfo((info) => ({ ...info, email: cred.email }));
    setPersonInfo((info) => ({ ...info, password: cred.password }));

    handleLogin();
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(cred),
      });
      setIsLoggedIn(true);
      navigate(location?.state?.from?.pathname);
      const data = await response.json();

      toast.success("Login successful!!");
      localStorage.setItem("token", data.encodedToken);
    } catch (e) {
      console.error(e);
    }
  };

  if (localStorage.getItem("token")) {
    setIsLoggedIn(true);
    navigate("/");
  }
  console.log(personInfo);
  return (
    <div>
      <div className="signIn-card">
        <h2>Sign In</h2>
        <form
          onSubmit={(e) => {
            userLogin();
            e.preventDefault();
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
            <button type="submit" onClick={guestLogin}>
              Login As a Guest
            </button>
          </div>
          <div className="signUp-signIn">
            Don't have an account?<NavLink to="/signup">sign up</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
