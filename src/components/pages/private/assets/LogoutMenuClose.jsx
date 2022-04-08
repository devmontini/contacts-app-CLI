import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutMenuClose = () => {
  const { logout } = useAuth0();
  return (
    <div className="mt-3 px-2 space-y-1">
      <button
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
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

export default LogoutMenuClose;
