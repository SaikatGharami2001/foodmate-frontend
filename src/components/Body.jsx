import { useState, useEffect } from "react";
import Card from "./Card";
import { API_LINK } from "../utils/utils";

const Body = () => {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const dataToShow = filteredData.length > 0 ? filteredData : allData;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_LINK);
      const data = await res.json();
      const resData = data?.data?.cards;
      setAllData(resData);
    };
    fetchData();
  }, []);

  // Top Rating Logic

  const topRated = () => {
    const topRatedCards = allData.filter(
      (res) => res?.card?.card?.info?.avgRating >= 4.5
    );
    setFilteredData(topRatedCards);
  };

  // Budget Friendly Logic

  const budgetFriendly = () => {
    const budgetFriendlyCards = allData.filter((res) => {
      const costString = res.card?.card?.info?.costForTwo;
      const costNumber = Number(costString?.split("")[0]?.replace("₹", ""));
      return costNumber <= 300;
    });
    setFilteredData(budgetFriendlyCards);
  };

  // Pure Veg Logic

  const pureVeg = () => {
    const pureVegCards = allData.filter((res) => {
      return res?.card?.card?.info?.veg === true;
    });
    setFilteredData(pureVegCards);
  };

  // Fast Delivery Logic

  const fastDelivery = () => {
    const fastDeliveryCards = allData.filter(
      (res) => res?.card?.card?.info?.sla?.deliveryTime <= 25
    );
    setFilteredData(fastDeliveryCards);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 pt-6 pb-4">
      {/* FILTERS */}
      <div className="flex flex-wrap gap-4 mb-10">
        {/* Top Rated */}
        <button
          onClick={() => topRated()}
          className="px-5 py-3 bg-[#0F131A] border border-[#2a3140] text-gray-200 rounded-xl 
                           hover:border-[#F7B500] hover:text-[#F7B500] transition font-medium text-[15px] 
                           flex items-center gap-2 shadow-sm"
        >
          ⭐ Top Rated
        </button>

        {/* Budget Friendly */}
        <button
          onClick={budgetFriendly}
          className="px-5 py-3 bg-[#0F131A] border border-[#2a3140] text-gray-200 rounded-xl 
                           hover:border-[#4ADE80] hover:text-[#4ADE80] transition font-medium text-[15px] 
                           flex items-center gap-2 shadow-sm"
        >
          🪙 Budget Friendly
        </button>

        {/* Pure Veg */}
        <button
          onClick={pureVeg}
          className="px-5 py-3 bg-[#0F131A] border border-[#2a3140] text-gray-200 rounded-xl 
                           hover:border-[#FF5C8A] hover:text-[#FF5C8A] transition font-medium text-[15px] 
                           flex items-center gap-2 shadow-sm"
        >
          🥗 Pure Veg
        </button>

        {/* Fast Delivery */}
        <button
          onClick={fastDelivery}
          className="px-5 py-3 bg-[#0F131A] border border-[#2a3140] text-gray-200 rounded-xl 
                           hover:border-[#4da3ff] hover:text-[#4da3ff] transition font-medium text-[15px] 
                           flex items-center gap-2 shadow-sm"
        >
          ⏱ Fast Delivery
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {dataToShow
          .filter((item) => item?.card?.card?.info)
          .map((item, index) => (
            <Card key={index} resData={item} />
          ))}
      </div>
    </div>
  );
};

export default Body;
