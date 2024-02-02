        
        
        const heading5 = React.createElement("h1",{id:"title5",style:{color:"yellow"}},"Hello from Root2 react")
        const heading6 = React.createElement("h1",{id:"title6",style:{color:"blue"}},"Hello from Root2 Heading 2")
        const heading7 = React.createElement("h1",{id:"title7",style:{color:"green"}},"Hello from Root2 Heading 4")
        
        const container2 = React.createElement("div",{id:"container2"},[heading5,heading6,heading7]);
        
        const root2 = ReactDOM.createRoot(document.getElementById("root2")) 
        
        root2.render(container2)   
       
        document.getElementById("root2").innerHTML="this gonna change" 