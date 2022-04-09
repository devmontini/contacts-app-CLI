import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="w-full h-full flex m-0 justify-center items-center"
      onClick={() => loginWithRedirect()}
    >
      get in
    </button>
  );
};

export default LoginButton;
