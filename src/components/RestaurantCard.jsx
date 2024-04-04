import React, { useContext } from "react";
import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

// const RestaurantCard = (props) => {
// const {resName, cuisine} = props;
// const { resData } = props;
// const { name, cuisines, avgRating, slaString, cloudinaryImageId } =
// resData?.data; 
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwo,
  locality,
  availability
}) => {
  
  return (
    <div className=" m-2 p-4 w-72 h-[580px]  rounded-xl bg-gray-200 hover:border-2 border-slate-300 shadow-md ">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
      <h2 className="font-bold text-2xl">{name}</h2>
      {/* if you have an array in your JSON data just join them with gap and commas with (.join()) */}
      <h3 className="font-semibold">{cuisines.join(" , ")}</h3>
      <h4 className="italic">Rating: {avgRating}⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>Location: {locality}</h4>
      <h4>availability: {availability.nextCloseTime}</h4>  
    </div>
  );
};
export const withOffer =(RestaurantCard)=>
{ // it jus take another component and will did some modification and return the same
  //restcsrd
  return (props)=>{
    // console.log(props)
    
    return (<div>
      <p className="absolute pl-8 mt-5 text-white text-2xl font-bold">{props?.aggregatedDiscountInfoV3?.subHeader }</p>
      <RestaurantCard{...props}/>
    </div>
    );
  
  }
};

export default RestaurantCard;
