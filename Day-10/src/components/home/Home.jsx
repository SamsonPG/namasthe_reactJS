import { useState } from "react";
import Card from "./Card.jsx";
import Shimmer from "./Shimmerui.jsx";
import { Link } from "react-router-dom";
import getAllRestaurants from "../../utils/getAllRestaurants.js";

const Home = () => {
  const [searchText, setSearchText] = useState("");

  const { allRestaurants, filteredRestaurants } = getAllRestaurants(searchText);

  //not rendering component (early return)
  if (!allRestaurants)
    return (
      <>
        <div>No restaurants found 😟</div>
      </>
    );

  return (
    <div className="container mx-auto">
      {/* <div className="p-5 flex justify-center items-center">
        <input
          className="bg-slate-200 p-2 rounded-md placeholder-black text-black w-96"
          type="text"
          placeholder="Search for Restaurant and Food"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
      </div> */}

      <div className="flex justify-center">
        <div className="relative w-96">
          <input
            className="bg-slate-200 p-2 pr-10 rounded-md placeholder-black text-black w-full"
            type="text"
            placeholder="Search for Restaurant and Food"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M15 10.5A4.5 4.5 0 1 0 10.5 15 4.5 4.5 0 0 0 15 10.5z"
              ></path>
            </svg>
          </span>
        </div>
      </div>

      

      <div className="flex flex-wrap justify-around m-10 mb-10">
        {filteredRestaurants.length === 0 ? (
          <>{searchText ? <div>No restaurants found 😟</div> : <Shimmer />}</>
        ) : (
          filteredRestaurants.slice(0, 8).map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <Card {...restaurant.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
