import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {cloudinaryLink} from "../../constant"
const RestaurantMenu =()=>{

    const {resID} = useParams();
    const [restaurantMenu,setRestaurantMenu] = useState({});

    useEffect(()=>{
        getRestaurentMenu()
    },[])


    async function getRestaurentMenu(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.5276416&lng=76.2144349&restaurantId=265398&catalog_qa=undefined&submitAction=ENTER")
        const json= await data.json();
        setRestaurantMenu(json?.data?.cards[0]?.card?.card?.info)
    }

    return(
        <div>
            <h1>Restaurant id : {resID}</h1>
            <h2>{restaurantMenu.name}</h2>
            <img src={cloudinaryLink + restaurantMenu.cloudinaryImageId}/>
        </div>
    )
}

export default RestaurantMenu;