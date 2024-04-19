import Home from "../home/Home";
import { render, waitFor , fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../../store/Store";
import { StaticRouter } from "react-router-dom/server";
import { testDefaultRestaurantsList } from "../../mocks/dummyData";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(testDefaultRestaurantsList);
    },
  });
});
test("Search for string (Biryani) results on Homepage", async () => {
  const Body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Home />
      </Provider>
    </StaticRouter>
  );

  //console.log(Body)

  await waitFor(()=> expect(Body.getByTestId("searchBox")))

 const searchbox = Body.getByTestId("searchBox");
fireEvent.change(searchbox, { target: { value: "Biryani" } });

      /*
  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn)
  */


  // Get the restaurant list
  const restlist = Body.getByTestId("restaurant-list");
  // Ensure the number of restaurants displayed is as expected
  expect(restlist.children.length).toBe(4);
});



// import Home from "../home/Home";
// import { render, waitFor, fireEvent } from "@testing-library/react";
// import { Provider } from "react-redux";
// import Store from "../../store/Store";
// import { StaticRouter } from "react-router-dom/server";
// import { testDefaultRestaurantsList } from "../../mocks/dummyData";
// import "@testing-library/jest-dom";

// // Mock the fetch function to return test data
// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(testDefaultRestaurantsList);
//     },
//   });
// });

// test("Search for string (Biryani) results on Homepage", async () => {
//   // Render the Home component with mocked data
//   const Body = render(
//     <StaticRouter>
//       <Provider store={Store}>
//         <Home />
//       </Provider>
//     </StaticRouter>
//   );

//   // Wait for the search box to be available
//   await waitFor(() => expect(Body.getByTestId("searchBox")));


//   const searchbox = Body.getByTestId("searchBox");
//   fireEvent.change(searchbox, { target: { value: "Biryani" } });

//   // Ensure the number of restaurants displayed is as expected after searching
//   const restlist = Body.getByTestId("restaurant-list");
//   // Note: Check if there are any children present in the restaurant list
//   expect(restlist.children.length).toBeGreaterThan(2);
// });
