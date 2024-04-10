import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { cloudinaryLink } from "../../constant";
import Shimmer from "./Shimmerui"
import getRestaurantMenu from "../../utils/getRestaurantMenu";

const RestaurantMenu = () => {
    const { resID } = useParams();

    const {restaurantMenu, restaurantName} = getRestaurantMenu(resID)

    return (!restaurantMenu || !restaurantName)? <Shimmer/>:(
        <div className="restaurantMenu">
            <div>
                <h1>Restaurant id : {resID}</h1>
                <h2>{restaurantName?.name}</h2>
                <img src={cloudinaryLink + restaurantName?.cloudinaryImageId} alt={restaurantName?.name} />
                <h3>{restaurantName?.locality}</h3>
                <h3>{restaurantName?.areaName}</h3>
                <h3>{restaurantName?.costForTwoMessage}</h3>
                <h3>{restaurantName?.avgRating} Stars</h3>
            </div>
            <div>
            <h1>Restaurant Menu :</h1>
                {restaurantMenu.map(item => (
                    <div key={item?.card?.info?.id}>
                        <h4>{item?.card?.info?.name}</h4>
                        <p>Category: {item?.card?.info?.category}</p>
                        <p>Price: {item?.card?.info?.price}</p>
                        <p>Ratings: {item?.card?.info?.ratings?.aggregatedRating?.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenu;
