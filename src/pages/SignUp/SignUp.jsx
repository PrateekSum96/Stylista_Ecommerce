import "./SignUp.css";
import { useContext } from "react";
import { SignUpComponent } from "./SignUpComponent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const SignUp = () => {
  const { personInfo, signUp } = useContext(AuthContext);
  const { password, confirmPassword } = personInfo;

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
