import logo from "../../img/logo.png";
import { useState } from "react";
import {Link } from "react-router-dom";
import useOnlineOffline from "../../utils/useOnlineOffline";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onlineStatus =useOnlineOffline()

  return (
    <nav className="navbar">
      <a href="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" />
        <span>Food Willa</span>
      </a>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><span>{onlineStatus? "💚" : "❤" }</span></li>
        <li>
          {isLoggedIn ? (
            <button
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              Login
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
