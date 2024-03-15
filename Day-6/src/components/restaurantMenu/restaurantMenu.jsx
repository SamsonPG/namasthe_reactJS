import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {cloudinaryLink} from "../../constant"
const RestaurantMenu =()=>{

    const {resID} = useParams();
   
    const [restaurantName,setRestaurantName] = useState({});
    const [restaurantMenu,setRestaurantMenu] = useState({});

    useEffect(()=>{
        getRestaurentMenu()
    },[])


    async function getRestaurentMenu(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.5276416&lng=76.2144349&restaurantId=265398&catalog_qa=undefined&submitAction=ENTER")
        const json= await data.json();
        setRestaurantName(json?.data?.cards[0]?.card?.card?.info)
        setRestaurantMenu(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[0]?.card?.info)
       
    }
    useEffect(() => {
        console.log(restaurantMenu);
    }, [restaurantMenu]); // Runs whenever restaurantMenu changes

 
    return(
        <div>
        <div>
            <h1>Restaurant id : {resID}</h1>
            <h2>{restaurantName.name}</h2>
            <img src={cloudinaryLink + restaurantName.cloudinaryImageId}/>
            <h3>{restaurantName.locality}</h3>
            <h3>{restaurantName.areaName}</h3>
            <h3>{restaurantName.costForTwoMessage}</h3>
            <h3>{restaurantName.avgRating} Stars</h3>
        </div>
        <div>
          
        </div>
        </div>
    )
}

export default RestaurantMenu;