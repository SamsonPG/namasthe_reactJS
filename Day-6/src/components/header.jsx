import logo from "../../img/logo.png"
import { useState } from "react"

const Header= ()=>{

    const [login,setLogin]=useState("Login")

    return(
        <nav className="navbar">
        <a href="/" style={{display:"flex", alignItems:"center"}}><img src={logo} alt="logo"></img><span>Food Willa</span></a>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li><button onClick={()=>{setLogin("Login")? setLogin("Logout") : setLogin("Login")}}>{login}</button></li>
        </ul>
        </nav>
    )
}

export default Header;
