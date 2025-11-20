import { useState, useEffect } from "react";
import Card from "./Card";
import { API_LINK } from "../utils/utils";

const Body = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_LINK);
      const data = await res.json();
      const resData = data?.data?.cards;
      setCardData(resData);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 pt-6 pb-4">
      {/* FILTERS */}
      <div className="flex flex-wrap gap-4 mb-10">
        {/* Top Rated */}
        <button
          className="px-5 py-3 bg-[#0F131A] border border-[#2a3140] text-gray-200 rounded-xl 
                           hover:border-[#F7B500] hover:text-[#F7B500] transition font-medium text-[15px] 
                           flex items-center gap-2 shadow-sm"
        >
          ⭐ Top Rated
        </button>

        {/* Budget Friendly */}
        <button
          className="px-5 py-3 bg-[#0F131A] border border-[#2a3140] text-gray-200 rounded-xl 
                           hover:border-[#4ADE80] hover:text-[#4ADE80] transition font-medium text-[15px] 
                           flex items-center gap-2 shadow-sm"
        >
          🪙 Budget Friendly
        </button>

        {/* Pure Veg */}
        <button
          className="px-5 py-3 bg-[#0F131A] border border-[#2a3140] text-gray-200 rounded-xl 
                           hover:border-[#FF5C8A] hover:text-[#FF5C8A] transition font-medium text-[15px] 
                           flex items-center gap-2 shadow-sm"
        >
          🥗 Pure Veg
        </button>

        {/* Fast Delivery */}
        <button
          className="px-5 py-3 bg-[#0F131A] border border-[#2a3140] text-gray-200 rounded-xl 
                           hover:border-[#4da3ff] hover:text-[#4da3ff] transition font-medium text-[15px] 
                           flex items-center gap-2 shadow-sm"
        >
          ⏱ Fast Delivery
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cardData
          .filter((item) => item?.card?.card?.info)
          .map((item, index) => (
            <Card key={index} resData={item} />
          ))}
      </div>
    </div>
  );
};

export default Body;
