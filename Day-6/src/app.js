import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Home from "./components/home/home";
import AboutUs from "./components/aboutUs/aboutUs";
import Profile from "./components/aboutUs/profile";
import ContactUs from "./components/contact/contactUs";
import ErrorPage from "./components/errorPage/errorPage";
import Footer from "./components/footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/restaurantMenu/restaurantMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutus", element: <AboutUs />, children:[{path :"profile",element: <Profile/>}]},
      { path: "/contactus", element: <ContactUs /> },
      { path: "/restaurant/:resID", element: <RestaurantMenu/>}
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
