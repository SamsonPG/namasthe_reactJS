import Home from "../home/Home";
import { render, waitFor } from "@testing-library/react";
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


test("Shimmer loads & Restaurants display on Homepage", () => {
    const Body = render(
      <StaticRouter>
        <Provider store={Store}>
          <Home />
        </Provider>
      </StaticRouter>
    );
  
    //console.log(Body)
  
    

    const shimmers = Body.getAllByTestId("shimmer");
    //console.log(shimmers);
    shimmers.forEach((shimmer) => {
      expect(shimmer.children.length).toBe(6);
    });
    const restlist = Body.getByTestId("restaurant-list")
    //console.log(restlist);
    expect(restlist.children.length).toBe(8);
});