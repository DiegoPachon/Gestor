import React from "react";
import { useAuth } from "../auth/Auth";
import Auth from "./Auth";
import NoAuth from "./NoAuth";
import "./Header.css";

const signOut = () =>{

localStorage.removeItem("authToken")

}

const Header = () => {
  const { token, onLogout } = useAuth();
  return (
    <div>
      {token && (
        <>
          <Auth onLogout={signOut} />
        </>
      )}
      {!token && (
        <>
        </>
      )}
    </div>
  );
};

export default Header;
