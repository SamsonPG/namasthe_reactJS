import { cloudinaryLink } from "../../constant.js";

const Card = ({
  name,
  cloudinaryImageId,
  locality,
  areaName,
  cuisines,
  avgRatingString,
}) => {
  return (
    <div className="w-[290px] h-[390px] rounded-lg shadow-lg m-4 p-4 bg-zinc-100 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="w-[260px] h-[200px] overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 ">
        <img
          className="h-full w-full object-cover object-center "
          src={cloudinaryLink + cloudinaryImageId}
        ></img>
      </div>
      <br />
      <h3 className="font-bold text-xl  truncate">{name}</h3>
      <h4 className="truncate">{locality}</h4>
      <h6 className="truncate">{areaName}</h6>
      <h5 className="truncate">{cuisines.join(", ")}</h5>
   
        <span className="inline-block bg-green-500 rounded-full p-1 px-4 text-white">
          👌 {avgRatingString}
        </span>
     
    </div>
  );
};

export default Card;
