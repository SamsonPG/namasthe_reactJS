import logo from "../assets/img/logo.png";
import { useState } from "react";
import {Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  

  return (
    <nav className="navbar">
      <a href="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" />
        <span>FoodCart</span>
      </a>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li>
          {isLoggedIn ? (
            <button
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              Sign In
            </button>
          ) : (
            <button
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              Log In
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
