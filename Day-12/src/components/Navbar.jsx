import logo from "../assets/img/logo.png";
import { useState,useContext } from "react";
import {Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {user} = useContext(UserContext) 

  return (
    <nav className="z-50 bg-amber-400 shadow-md sticky top-0 w-full mb-6">
      <div  className="flex justify-between items-center">
      <a href="/" className="flex items-center">
        <img className="w-14 h-14" src={logo} alt="logo" />
        <span className="font-bold text-2xl">Food Willa</span>
      </a>
      <ul className="flex items-center ">
        <li className="px-2"><Link to="/">Home</Link></li>
        <li className="px-2"><Link to="/aboutus">About Us</Link></li>
        <li className="px-2"><Link to="/contactus">Contact Us</Link></li>
        <li className="px-2"><Link to="/instamart">Instamart</Link></li>
        <li className="px-2"><Link to="/cart">Cart</Link></li>
        <li className="pl-4 pr-0 font-bold ">{user.name}</li>
        <li className="pr-4">
          {isLoggedIn ? (
            <button
            className="rounded-md px-2 pb-1 m-2 bg-orange-900 text-white"
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              Logout
            </button>
          ) : (
            <button
            className="rounded-md px-2 pb-1 m-2 bg-orange-900 text-white"
              onClick={() => {
                setIsLoggedIn(true);
              }}
            >
              Login
            </button>
          )}
        </li>
      </ul>
      </div>
      <div className=" animate-pulse pt-1  bg-purple-800  sm:bg-blue-800 md:bg-red-800"></div>

    </nav>
  );
};

export default Navbar;
