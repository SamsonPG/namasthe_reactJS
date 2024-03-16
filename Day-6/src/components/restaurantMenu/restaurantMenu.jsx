import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { cloudinaryLink } from "../../constant";
import Shimmer from "./shimmerui"

const RestaurantMenu = () => {
    const { resID } = useParams();
    const [restaurantName, setRestaurantName] = useState(null);
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    useEffect(() => {
        getRestaurantMenu();
    }, []);

    // async function getRestaurantMenu() {
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.5276416&lng=76.2144349&restaurantId="+resID);
    //     const json = await data.json();
    //     setRestaurantName(json?.data?.cards[0]?.card?.card?.info);
    //     const categories = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories;
    //     if (categories) {
    //         const menuItems = categories.flatMap(category => category.itemCards);
    //         setRestaurantMenu(menuItems);
    //     }
    //     else{
    //         setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    //     }
    // }

    async function getRestaurantMenu() {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.5276416&lng=76.2144349&restaurantId=${resID}`);
            const json = await data.json();
            if (json && json.data && json.data.cards) {
                setRestaurantName(json.data.cards[0]?.card?.card?.info);
                const categories = json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories;
                if (categories) {
                    const menuItems = categories.flatMap(category => category.itemCards);
                    setRestaurantMenu(menuItems);
                } else {
                    setRestaurantMenu(json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || []);
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
    
 
    return (!restaurantMenu || !restaurantName)? <Shimmer/>:(
        <div className="restaurantMenu">
            <div>
                <h1>Restaurant id : {resID}</h1>
                <h2>{restaurantName.name}</h2>
                <img src={cloudinaryLink + restaurantName.cloudinaryImageId} alt={restaurantName.name} />
                <h3>{restaurantName.locality}</h3>
                <h3>{restaurantName.areaName}</h3>
                <h3>{restaurantName.costForTwoMessage}</h3>
                <h3>{restaurantName.avgRating} Stars</h3>
            </div>
            <div>
            <h1>Restaurant Menu :</h1>
                {restaurantMenu.map(item => (
                    <div key={item.card.info.id}>
                        <h4>{item.card.info.name}</h4>
                        <p>Category: {item.card.info.category}</p>
                        <p>Price: {item.card.info.price}</p>
                        <p>Ratings: {item.card.info.ratings.aggregatedRating?.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenu;
