import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const {user, logoutUser} = useAuth()





  const navLinkStyle = ({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-between mx-3">
      <div>
        <Link id="header-logo" to="/">
          LOGO
        </Link>
      </div>
      <div className="d-flex align-items-center gap-4">
        {user ? (
                <>
                  <NavLink to="/" style={navLinkStyle}>Home</NavLink>
                  <NavLink to="/profile" style={navLinkStyle}>Profile</NavLink>
                  <Button style={{transform:'scale(0.8,0.8)'}} onClick={logoutUser}>Logout</Button>
                </>
                )
              : (
                <>
                  <Button style={{transform:'scale(0.8,0.8)'}}>Login</Button>
                </>
                )
          }   
      </div>
    </div>
  );
};

export default Header;
