import React, { useState, useEffect, useContext } from "react";
//we dont use ./components in the below line because the body and the restrau cards are at the same folder....earlier we were exporting our components to app so app.js is outside the components folder that is why while importing we wrote ./components/nameofthecomponent.
import RestaurantCard, { withOffer } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useShowStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/userContext";
const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filteredres, setFilteredres] = useState([]);
  const [searchText, setSearchText] = useState("");
  const CardOffer = withOffer(RestaurantCard);
  // console.log(listOfRestaurents);

  useEffect(() => {
    getRestaurant();
  }, []);
  async function getRestaurant() {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
      headers: {
        'x-cors-api-key': 'temp_1d50d0137e4f00f30e4e9f94a1c96753'
        }
      }
    );
    const json = await data.json(data);
    // console.log(json);
    setListOfRestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredres(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  const onlineStatus = useShowStatus();
  if (onlineStatus === false)
    return <h3>Looks like you are offline🌐🌐🌐 Please check your internet</h3>;

  if (listOfRestaurents === 0) {
    return <Shimmer />;
  }
  const {  loggedInUser, setuserName } = useContext(UserContext);

  return (
    <div className="">
      {/* <div className="search">Search</div> */}
      <div className="flex m-4 ">
        <div className="flex m-4">
          <input
            className="w-80 p-2  border-2 border-pink-200 rounded-xl mx-2 "
            type="text"
            placeholder="search for restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            required
          ></input>
          <button
            className=" bg-pink-200 px-4 rounded-lg"
            onClick={() => {
              const filterRes = listOfRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredres(filterRes); //we crate another copy of res then we filter from original and after filter we set those to setfilter state so our filterres is changed not listres , when we again do search it again did it from list of rest which is unchaged ,and also we map filter res cox we need to show what we search and in first render filter res gets all the res as list res , as we have created copy //
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-pink-200  px-2 rounded-lg h-12 mt-3"
          onClick={() => {
            const filter = listOfRestaurents.filter(
              (val) => val.info.avgRating > 4.2
            );
            setFilteredres(filter);
          }}
        >
          Click Here to Filter Restraurents
        </button>
      </div>

      <div className="flex flex-wrap justify-self-auto">
        {filteredres.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/menu/" + restaurant.info.id}>
            {restaurant?.info?.aggregatedDiscountInfoV3?.subHeader ? (
              <CardOffer {...restaurant.info} />
            ) : (
              <RestaurantCard {...restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
