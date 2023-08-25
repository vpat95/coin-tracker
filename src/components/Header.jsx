import React from "react";
import { NavLink, Link} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "react-bootstrap";
import logo from '../assets/logo.png'
import Title from './Title'

const Header = () => {
  const {user, logoutUser} = useAuth()


  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
    }
  }

  return (
    <div style={{background:'black'}}className=" d-flex justify-content-between align-items-center p-2">
      <div>
        <Link id="header-logo" to="/">
          <img style={{maxWidth: '1.5vw'}} src={logo}></img>
        </Link>
      </div>
      <Title />
      <div className="links">
        {user ? (
                <>
                  <NavLink  className="text-light" to="/" style={navLinkStyle}>Dashboard</NavLink>
                  <NavLink  className="text-light" to="/profile" style={navLinkStyle}>Profile</NavLink>
                  <Button style={{background: '#4655df', border:'none' , transform:'scale(0.7,0.7)'}} onClick={logoutUser}>Logout</Button>
                </>
                )
              : (
                <>
                  <NavLink className="text-light" to="/" style={navLinkStyle}>Dashboard</NavLink>
                  <Link to='/login'>
                    <Button style={{background: '#4655df', border:'none' , transform:'scale(0.7,0.7)'}}>Login</Button>
                  </Link>
                </>
                )
          }   
      </div>
    </div>
  );
};

export default Header;
