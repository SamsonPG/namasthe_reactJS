import React from "react";
import ReactDOM from"react-dom";
import Navbar from "./components/navbar.jsx";
import Body from "./components/body.jsx";
import Footer from "./components/footer.jsx";


const HomePage = ()=>{
    return(
        <>
        <Navbar/>
        <Body/>
        <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HomePage/>)