import { Outlet } from "react-router-dom";
import ProfileClass from "./profileClass";
import ProfileFunctional from "./profile";

const AboutUs = ()=>{
    return(
        <>
        <h1>About Us</h1>
        <Outlet/>
        <ProfileClass name={"samson"} xyz="abc"/>
        //////////////////
        <ProfileFunctional name={"samson"} xyz="abc"/>
        </>
    )

}

export default AboutUs;