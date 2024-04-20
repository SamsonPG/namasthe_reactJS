import {render} from "@testing-library/react"
import Footer from "../Footer"
import { StaticRouter } from "react-router-dom/server";

test("Online status should be _Online_ rendering footer",()=>{
    
    //Load Footer
    const footer = render(
    <StaticRouter>
  
    <Footer/>

    </StaticRouter>
    );
   // console.log(footer);

    
   //Check if Online Status loaded
   const online = footer.getByTestId("online-status");
   //console.log(online);
   expect(online.innerHTML).toBe("📶- Online")


})