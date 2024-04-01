
import {useEffect, useState} from "react";
import { restaurantMenuURL } from "../constant";

const getRestaurantMenu = (resID)=>{


    const [restaurantName, setRestaurantName] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        getRestaurantMenu();
    }, []);

    async function getRestaurantMenu() {
        try {
            const data = await fetch(`${restaurantMenuURL}${resID}`);
            const json = await data.json();
            if (json && json.data && json.data.cards) {
                setRestaurantName(json.data.cards[2]?.card?.card?.info);
                const categories = json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories;
                if (categories) {
                    const menuItems = categories.flatMap(category => category.itemCards);
                    setRestaurantMenu(menuItems);
                  
                } else {
                    const menuItems2 = json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
                    setRestaurantMenu(menuItems2);
                  
                }
            } else {
                console.error("Invalid JSON response:", json);
                // Handle the case where the JSON response does not have the expected structure
            }
        } catch (error) {
            console.error("Error fetching restaurant menu:", error);
            // Handle fetch error
        }
    }
    
 return {restaurantName, restaurantMenu};

};

export default getRestaurantMenu;