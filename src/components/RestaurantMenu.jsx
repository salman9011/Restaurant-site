import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenuCard from "./useMenuCard";
import ResCatAccordion from "./ResCatAccordion";
import { useState } from "react";

const RestaurantMenu = () => {
  
  const {resId} = useParams();
  const resinfo = useMenuCard(resId); //calling my custom hook//

  [showIndex,setshowIndex]=useState(null);
  // console.log(resinfo);
  if (resinfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[2]?.card?.card?.info;
    
  const { itemCards } =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);
   const categories= (resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.["card"]?.["@type"]  =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || c.card?.["card"]?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ));
  return (
    <div className="text-center">
      <h1 className="font-bold  text-2xl my-5">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines} - {costForTwoMessage}
      </p>
      {/* lets create a accordion with categories and here pass each card */}
      {categories.map((category,index) =>(
      <ResCatAccordion key={category.card.card.title} data={category.card.card}
      // this below is called lifting the stateup(read it from react documnt)
      // this become now controlled component under the control of parent restaurantMenu//
      showItems ={index == showIndex ? true : false}
      setshowIndex={()=>setshowIndex(index)}
      />
      ))}
    </div>
  );
};
 
export default RestaurantMenu;
