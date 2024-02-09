import { cloudinaryLink } from "../constant.js";

const Card = ({
  
    name,
    cloudinaryImageId,
    locality,
    areaName,
    cuisines,
    avgRatingString
})=>{
    return(
        <div className="card">
        <div className="image-container"><img src={cloudinaryLink+cloudinaryImageId}></img></div>
        <br/>
        <h3>{name}</h3>
        <h4>{locality}</h4>
        <h6>{areaName}</h6>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRatingString}</h5>
        </div>
    )
}

export default Card;