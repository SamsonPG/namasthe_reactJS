import {render} from "@testing-library/react"
import Navbar from "../Navbar"
import { Provider } from "react-redux";
import Store from "../../store/Store"
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header",()=>{
    
    //Load Header
    const header = render(
    <StaticRouter>
    <Provider store={Store}>
    <Navbar/>
    </Provider>
    </StaticRouter>
    );
   // console.log(header);

    
   //Check if logo is loaded
    const logo = header.getAllByTestId("logo");
    //console.log(logo);
    expect(logo[0].src).toBe("http://localhost/dummy.png")

})

test("Cart should have 0-items on rendering header",()=>{
    
    //Load Header
    const header = render(
    <StaticRouter>
    <Provider store={Store}>
    <Navbar/>
    </Provider>
    </StaticRouter>
    );
   // console.log(header);

    
     //Check if Online Status loaded
     const cart = header.getByTestId("cart");
     //console.log(cart);
     expect(cart.innerHTML).toBe("0")
})