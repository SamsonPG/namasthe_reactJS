import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const AboutUs = ()=>{
    return(
        <>
        <h1>About Us</h1>
        <Link to="/aboutclass">About Us Class</Link>
        <Outlet/>
 
        </>
    )

}

export default AboutUs;