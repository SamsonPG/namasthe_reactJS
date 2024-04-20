import Home from "../home/Home";
import { render, waitFor , fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../../store/Store";
import { StaticRouter } from "react-router-dom/server";
import { testDefaultRestaurantsList } from "../../mocks/dummyRestaurants";
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
  expect(restlist.children.length).toBe(3);
});
