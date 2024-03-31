import { useState } from "react";
import Card from "./Card.jsx";
import Shimmer from "./Shimmerui.jsx";
import {Link} from "react-router-dom"
import getAllRestaurants from "../../../utils/getAllRestaurants.js";


const Home = () => {
   
    const [searchText, setSearchText] = useState("");

    const {allRestaurants, filteredRestaurants} = getAllRestaurants(searchText)


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
                    <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id} ><Card {...restaurant.info} /></Link> 
                    ))
                )}
            </div>
          
        </>
    );
};


export default Home;
