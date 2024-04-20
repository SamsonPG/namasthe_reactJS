
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
const AboutUs = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <h1 className="font-bold m-5">About Us</h1>
      </div>
      <div className="w-full flex justify-center shadow-lg  p-10 bg-zinc-100">

        <div className="w-3/5 pr-4 flex flex-col justify-center items-center">
          {/* 60% text section */}
          <h1 className="font-bold m-5">Food Cart</h1>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="w-2/5">
          {/* 40% image section */}
          <img
            src={logo}
            alt="About Us Image"
            className="rounded-full block mx-auto w-80 h-80 object-cover" // Added mx-auto and block classes
          />
        </div>
      </div>
      <div className="flex justify-center my-14">
        <Link
          to="/aboutclass"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          About Us Class
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutUs;
