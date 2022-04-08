import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CgLogOut } from "react-icons/cg";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="btn  btn-danger btn-block "
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      <CgLogOut className="text-em4 md:text-em1_5" />
    </button>
  );
};

export default LogoutButton;
