import logo from"../../img/logo.png";

const navbar = ()=>{
    return(
<nav className="navbar">
<a href="/" style={{display:"flex", alignItems:"center"}}><img src={logo} alt="logo"></img><span>Food Cart</span></a>
<ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
</ul>
</nav>
    )
}

export default navbar;
