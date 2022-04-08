import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CgLogIn } from "react-icons/cg";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="w-full h-full flex m-0 justify-center items-center"
      onClick={() => loginWithRedirect()}
    >
      LogIn
    </button>
  );
};

export default LoginButton;
