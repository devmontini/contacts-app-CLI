import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutMenuOpen = () => {
  const { logout } = useAuth0();
  return (
    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
      <button
        className="block px-4 py-2 text-sm text-gray-700 w-full hover:bg-gray-100"
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Lou Out
      </button>
    </div>
  );
};

export default LogoutMenuOpen;
