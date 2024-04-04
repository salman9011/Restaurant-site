import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemLstAccordon = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();
  const handleItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div   key={(item?.card?.info?.id )} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
          <div >
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </span>
            </div>

            <div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
          </div>
          <div>
            <img src={CDN_URL + item?.card?.info?.imageId} className="w-24" />
            <div className="absolute">
              <button
                className=" text-white bg-black  shadow-lg my-5 rounded-lg mx-5 px-2 py-2"
                onClick={()=>handleItems(item)} //all items are adding this is issue with api//
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemLstAccordon;
