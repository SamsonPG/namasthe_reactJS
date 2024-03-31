import { useEffect, useState } from "react";


const getAllRestaurants = (searchText)=>{

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  

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

    return allRestaurants, filteredRestaurants;

}

export default getAllRestaurants;