import "./SignUp.css";
import { useContext } from "react";
import { SignUpComponent } from "./SignUpComponent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router";

export const SignUp = () => {
  const navigate = useNavigate();

  const { setIsLoggedIn, personInfo, setUserDetail } = useContext(AuthContext);

  const { firstName, lastName, email, password, confirmPassword } = personInfo;

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
  const handleSignUp = () => {
    if (password === confirmPassword) {
      signUp();
    } else {
      toast.error("Passwords are not matching !!!");
    }
  };

  return (
    <div>
      <SignUpComponent handleSignUp={handleSignUp} />
    </div>
  );
};
