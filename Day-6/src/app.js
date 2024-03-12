import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Home from "./components/home/body";
import AboutUs from "./components/aboutUs/aboutUs";
import ContactUs from "./components/contact/contactUs"
import ErrorPage from "./components/errorPage/errorPage";
import Footer from "./components/footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

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
  { path: "/", element: <AppLayout />, errorElement: <ErrorPage /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/contactus", element: <ContactUs /> }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
