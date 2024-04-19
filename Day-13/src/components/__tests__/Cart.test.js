import RestaurantMenu from "../restaurantMenu/RestaurantMenu";
import Navbar from "../Navbar";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../../store/Store";
import { StaticRouter } from "react-router-dom/server";
import { TeaKadaiMenu } from "../../mocks/dummyMenu";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(TeaKadaiMenu);
    },
  });
});

test("Add Items to Cart", async () => {
  const restaurantMenus = render(
    <StaticRouter>
      <Provider store={Store}>
        <Navbar />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  //console.log(restaurantMenus)

  await waitFor(() => expect(restaurantMenus.getByTestId("resMenu")));

  const addBtn = restaurantMenus.getAllByTestId("addBtn");

  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);
  fireEvent.click(addBtn[4]);

  const cart = restaurantMenus.getByTestId("cart");

  expect(parseInt(cart.innerHTML)).toBe(3);

});
