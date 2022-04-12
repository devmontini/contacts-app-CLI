import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <div className="bg-gray-900 rounded-lg p-2 w-fit h-9 flex justify-center items-center">
      <button
        className="w-full h-full flex m-0 justify-center items-center"
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        LogOut
      </button>
    </div>
  );
};

export default LogoutButton;
