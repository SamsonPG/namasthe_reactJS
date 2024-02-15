import { useState } from "react";
import { restaurantList } from "../constant.js";
import Card from "./card.jsx";




const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");

    function filteredData(searchText, restaurantList) {
        return restaurantList.filter((restaurant) => {
            const { name, locality, areaName, cuisines, avgRatingString } = restaurant.info;
    
            return (
                name.includes(searchText) ||
                locality.includes(searchText) ||
                areaName.includes(searchText) ||
                cuisines.some(cuisine => cuisine.includes(searchText)) ||
                avgRatingString.includes(searchText)
            );
        });
    }
    
    
    return (
        <>
            <div className="searchbox">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                ></input>
                <button
                    onClick={() => {
                        const data = searchText ? filteredData(searchText, restaurantList) : restaurantList;
                        setRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>

            <div className="cardContainer">
                {restaurants.map((restaurant) => {
                    return <Card {...restaurant.info} key={restaurant.info.id} />;
                })}
            </div>
        </>
    );
};

export default Body;
