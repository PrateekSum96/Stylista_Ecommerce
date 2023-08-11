import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [personInfo, setPersonInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    icon: false,
    confirmIcon: false,
  });

  const location = useLocation();
  const navigate = useNavigate();

  const { firstName, lastName, email, password } = personInfo;

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  //logIn
  const handleLogin = async (cred) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(cred),
      });
      const data = await response.json();

      if (data.errors) {
        toast.error(data.errors[0]);
      } else {
        setIsLoggedIn(true);
        setUserDetail(data.foundUser);
        localStorage.setItem("token", data.encodedToken);

        navigate(location?.state?.from?.pathname);
        toast.success("Login successful!!");
      }
    } catch (e) {
      console.error(e);
    }
  };

  //signUp

  const signUp = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const result = await response.json();

      if (result.errors) {
        toast.error(result.errors[0]);
      } else {
        setIsLoggedIn(true);
        setUserDetail(result.createdUser);
        localStorage.setItem("token", result.encodedToken);
        toast.success("Login successful!!");
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // VerifyUser
  const verifyUser = async () => {
    try {
      const response = await fetch("/api/auth/verify", {
        method: "POST",
        body: JSON.stringify({ encodedToken: localStorage?.getItem("token") }),
      });

      if (response.status === 200) {
        const result = await response.json();

        setIsLoggedIn(true);
        setUserDetail(result.user);
        navigate(location?.state?.from?.pathname);
      } else {
        setIsLoggedIn(false);
      }
    } catch (e) {
      console.error(e);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    verifyUser();
    // eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        personInfo,
        setPersonInfo,
        userDetail,
        setUserDetail,
        handleLogin,
        signUp,

        verifyUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
