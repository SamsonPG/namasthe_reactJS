import logo from "../../img/logo.png";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="navbar">
      <a href="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" />
        <span>Food Willa</span>
      </a>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
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
