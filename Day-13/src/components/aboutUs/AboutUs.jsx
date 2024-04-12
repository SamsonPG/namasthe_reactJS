import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const AboutUs = ()=>{
    return(
        <>
        <div className="flex justify-center">
  <h1 className="font-bold m-5">About Us</h1>
</div>

       
        <Link to="/aboutclass">About Us Class</Link>
        <Outlet/>
 
        </>
    )

}

export default AboutUs;