import React from "react";
import ReactDOM from "react-dom/client";


const heading1 = React.createElement("h1",{id:"heading 1",key:"heading1"},"Heading 1");
const heading2 = React.createElement("h1",{id:"heading 2",key:"heading2"},"Heading 2");
const heading3 = React.createElement("h1",{id:"heading 3",key:"heading3"},"Heading 3");

const title = React.createElement("div",{id:"title",key:"title"},[heading1,heading2,heading3]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);

//////////////////////////////////////

const Heading11 = (
<h1 id="heading11" key="heading11">
    heading11
    </h1>
);
const Heading22 = ()=> <h1 id="heading22" key="heading22">heading22</h1>
const Heading33 = <h1 id="heading33" key="heading33">heading33</h1>
const Heading44 = ()=> <h1 id="heading44" key="heading44">heading44</h1>

const Title22 = ()=>{
return(
    <div>
        {Heading11}
        {<Heading22/>}
        {<Heading44></Heading44>}
        <Heading22/>
        {Heading33}
        <h1>hello</h1>
    </div>

)};

const root22 = ReactDOM.createRoot(document.getElementById("root22"));

root22.render(<Title22/>);

////////////////////////////////////


const HeaderComponent = ()=>{
    return(
        <header key="header" id="header">
    
            <img key="logo" src="logo.png" alt="logo"/>
            <input type="text" placeholder="Search..." />
            <h3 key="user">User</h3>
           
        </header>
    );
}

const root33 = ReactDOM.createRoot(document.getElementById("root33"));

root33.render(<HeaderComponent/>)

