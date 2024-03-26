import { Outlet } from "react-router-dom";
import ProfileClass from "./profileClass";
import ProfileFunctional from "./profile";
import { Link } from "react-router-dom";

const AboutUs = ()=>{
    return(
        <>
        <h1>About Us</h1>
        <Link to="/aboutclass">About Us Class</Link>
        <Outlet/>
        <ProfileClass name={"samson"} xyz="abc"/>
        //////////////////
        <ProfileFunctional name={"samson"} xyz="abc"/>
        </>
    )

}

export default AboutUs;