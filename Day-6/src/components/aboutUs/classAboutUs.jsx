import React from "react";
import ProfileClass from "./profileClass";
import ProfileFunctional from "./profile";
class AboutClass extends React.Component{

    constructor (props){
        super(props);
       
        
        console.log("Parent - About class constructor");
    }

    componentDidMount(){
   
        console.log("Parent - About Class ComponentDidMount");
    }

    render(){
        console.log("Parent - About Class render");
        return(
            <>
             <h1>About Us From About Class</h1>
      
        <ProfileClass name={"First Child1"} xyz="abc"/>
        <ProfileClass name={"Second Child2"} xyz="abc"/>
        //////////////////
        <ProfileFunctional name={"samson"} xyz="abc"/>
            </>
        )
    }
}

export default AboutClass;