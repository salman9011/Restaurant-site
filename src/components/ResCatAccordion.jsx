import { useState } from "react";
import ItemLstAccordon from "./ItemLstAccordon";

const ResCatAccordion = ({ data,showItems,setshowIndex}) => {
  //   console.log(data);
  let handleClick = () => {
    setshowIndex();
  };
  return (
    <div>
      {/* Accordion Header */}
      <div className=" w-6/12 mx-auto m-1 py-6 bg-gray-50 shadow-xl">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards?.length  || data?.categories.length})
          </span>
          <span>{"⬇️"}</span>
        </div>
        {/* Accordion Body */}
        {showItems && <ItemLstAccordon items={data?.itemCards || data?.categories} />}
      </div>
    </div>
  );
};

export default ResCatAccordion;
