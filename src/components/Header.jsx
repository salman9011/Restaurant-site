import React from "react";
import { useState,useContext} from "react";
import { Link } from "react-router-dom";
import useShowStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttontxt,setbuttontxt] = useState("Login");
  const onlineStatus = useShowStatus();
  const {loggedInUser} =useContext(UserContext);
  const cartItems =useSelector((store)=> store.cart.items)
  console.log(cartItems);
  //how we read items from store and is called subscribing items from store//
  return (
    <div className ="flex align items-center justify-between bg-pink-100 drop-shadow-2xl h-28">
      <div>
        <img 
          src="https://img.freepik.com/premium-vector/restaurant-logo-design_636083-178.jpg"
          alt="logo"
          className="w-24 mix-blend-darken scale-150 pl-4"
        />
      </div>
      <div className="flex">
        <ul className=" flex items-center m-2 ">
          <li className="p-2">onlineStatus :{onlineStatus ? "✅":"🔴"}</li>
          <li className="p-2 hover:font-bold"><Link to ="./">Home</Link></li>
          <li className="p-2 hover:font-bold"><Link to ="./about">About US</Link></li>
          <li className="p-2 hover:font-bold"><Link to ="./contactus">Contact US</Link></li>
          <li className="p-2 hover:font-bold"><Link to ="./grocery">Grocery</Link></li>
          <li className="p-2  scale-150 hover:scale-[2]"><Link to ="./cart">🛒 </Link></li>
          <span className="text-lg pr-8 pb-4 font-bold">{cartItems.length}</span>
          <button className="bg-pink-200 p-2 rounded-lg  hover:bg-orange-300" onClick={()=>
          buttontxt == "Login" ? setbuttontxt("Logout") : setbuttontxt("Login")
          }>{buttontxt}</button>
          <li className="p-2 font-bold">{loggedInUser}</li>
        </ul>
        
      </div>
    </div>
  );
};

export default Header;