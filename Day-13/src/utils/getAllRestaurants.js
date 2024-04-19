import { useEffect, useState } from "react";
import { restaurantList } from "../constant";
import {RestaurantssList} from "../constant"

const getAllRestaurants = (searchText)=>{

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  

    useEffect(() => {
        getRestaurants();
    }, []);

    // async function getRestaurants() {
    //     const data = await fetch(restaurantList);
    //     const json = await data.json();
    //     const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    //     setAllRestaurants(restaurants);
    //     setFilteredRestaurants(restaurants);
    // }
    async function getRestaurants() {
        try {
            const restaurants = RestaurantssList.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setAllRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
            // Handle error
        }
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

    return {allRestaurants, filteredRestaurants};

}

export default getAllRestaurants;