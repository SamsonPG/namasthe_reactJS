import { useEffect, useState } from "react";
import Card from "./card.jsx";
import Shimmer from "./shimmerui.jsx";
import {defaultRestaurantsList} from "../../constant.js"
const Home = () => {
    const [allRestaurants, setAllRestaurants] = useState(defaultRestaurantsList);
    const [filteredRestaurants, setFilteredRestaurants] = useState(defaultRestaurantsList);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.51600&lng=76.21570&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setAllRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
    }

    useEffect(() => {
        const filteredData = allRestaurants.filter((restaurant) => {
            const { name, locality, areaName, cuisines, avgRatingString } = restaurant.info;
            return (
                name?.toLowerCase().includes(searchText.toLowerCase()) ||
                locality?.toLowerCase().includes(searchText.toLowerCase()) ||
                areaName?.toLowerCase().includes(searchText.toLowerCase()) ||
                cuisines?.some(cuisine => cuisine.toLowerCase().includes(searchText.toLowerCase())) ||
                avgRatingString?.toLowerCase().includes(searchText.toLowerCase())
            );
        });
        setFilteredRestaurants(filteredData);
    }, [searchText, allRestaurants]);

    //not rendering component (early return)
if(!allRestaurants) return (<><div>No restaurants found 😟</div></>);

    return (
        <>
            <div className="searchbox">
                <input
                    type="text"
                    placeholder="Search Anything"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                ></input>
            </div>

            <div className="cardContainer">
            {filteredRestaurants.length === 0 ? (
                    <>{searchText ? <div>No restaurants found</div> : <Shimmer />}</>
                ) : (
                    filteredRestaurants.slice(0, 8).map((restaurant) => (
                        <Card {...restaurant.info} key={restaurant.info.id} />
                    ))
                )}
            </div>
          
        </>
    );
};


export default Home;
