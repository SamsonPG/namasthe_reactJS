import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { cloudinaryLink } from "../../constant";
import Shimmer from "./Shimmerui";
import getRestaurantMenu from "../../utils/getRestaurantMenu";
import { addToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resID } = useParams();

  const { restaurantMenu, restaurantName } = getRestaurantMenu(resID);

  const dispatch = useDispatch();

  const addFoodItem = (item)=>{
    dispatch(addToCart(item))
  }

  return !restaurantMenu || !restaurantName ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="w-[290px] h-[420px] rounded-lg shadow-lg m-4 p-4 bg-zinc-100">
        <h1>Restaurant id : {resID}</h1>
        <h2 className="font-bold">{restaurantName?.name}</h2>
        <div className="w-[260px] h-[200px] overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 ">
          <img
            className="h-full w-full object-cover object-center "
            src={cloudinaryLink + restaurantName?.cloudinaryImageId}
            alt={restaurantName?.name}
          ></img>
        </div>
        <br />
        <h3 className="font-bold">{restaurantName?.locality}</h3>
        <h3 className="font-bold">{restaurantName?.areaName}</h3>
        <h3 className="font-bold">{restaurantName?.costForTwoMessage}</h3>
        <span className="inline-block bg-green-500 rounded-full p-1 px-4 mb-3 mt-2 text-white">
          👌 {restaurantName?.avgRating}
        </span>
      </div>
      <div className="p-5">
        <h1 className="font-bold">Restaurant Menu :</h1>
        <div className="m-4 flex flex-wrap justify-around justify-center">
        {restaurantMenu.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="w-full border rounded-lg shadow-lg m-4 p-4 bg-zinc-100 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <h4 className="font-bold">{item?.card?.info?.name}</h4>
            <p>Category: {item?.card?.info?.category}</p>
            <p className="font-bold">Price: {item?.card?.info?.price /100}/-</p>
            <p>
              Ratings: {item?.card?.info?.ratings?.aggregatedRating?.rating !== undefined ? item?.card?.info?.ratings?.aggregatedRating?.rating : "0.0"}

            </p>
            <button className="text-white rounded-lg m-2 font-bold p-2 bg-green-600" onClick={()=>addFoodItem(item.card.info)}>Add Item</button>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
