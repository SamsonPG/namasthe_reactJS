import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
// import Home from "./components/home/Home";
import AboutUs from "./components/aboutUs/AboutUs";
import InstaMart from "./components/instamart/InstaMart";
import AboutClass from "./components/aboutUs/ClassAboutUs";
import Profile from "./components/aboutUs/Profile";
import Cart from "./components/cart/Cart";
import ContactUs from "./components/contact/ContactUs";
import ErrorPage from "./components/errorPage/ErrorPage";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./components/home/Shimmerui";
import SamContext from "./utils/SamContext";
import { Provider } from "react-redux";
import Store from "./store/Store";
import BasicForm from "./components/form-Formik/BasicForm"
// import RestaurantMenu from "./components/restaurantMenu/restaurantMenu";

const Home = lazy(() => import("./components/home/Home"));
const RestaurantMenu = lazy(() =>
  import("./components/restaurantMenu/RestaurantMenu")
);

const AppLayout = () => {
  const [userSam, setUserSam] = useState({
    name: "samu shimshon",
    email: "sam2@gmail.com",
  });

  return (
    <>
      <Provider store={Store}>
        <Navbar />
        <Outlet />
        <SamContext.Provider value={{ user2: userSam, setUserSam: setUserSam }}>
          <Footer />
        </SamContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
        children: [{ path: "profile", element: <Profile /> }],
      },
      { path: "/aboutclass", element: <AboutClass /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/instamart", element: <InstaMart /> },
      { path: "/cart", element: <Cart /> },
      {path:"/Log Inform", element: <BasicForm/>},
      {
        path: "/restaurant/:resID",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
