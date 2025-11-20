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
    <div className="max-w-7xl mx-auto px-6 pt-10 pb-20">
      {/* SEARCH + FILTERS */}
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-gray-900 border border-gray-800 text-gray-300 rounded-lg hover:bg-gray-800 transition text-sm">
            ⭐ Top Rated
          </button>
          <button className="px-4 py-2 bg-gray-900 border border-gray-800 text-gray-300 rounded-lg hover:bg-gray-800 transition text-sm">
            💸 Budget Friendly
          </button>
          <button className="px-4 py-2 bg-gray-900 border border-gray-800 text-gray-300 rounded-lg hover:bg-gray-800 transition text-sm">
            🥗 Pure Veg
          </button>
          <button className="px-4 py-2 bg-gray-900 border border-gray-800 text-gray-300 rounded-lg hover:bg-gray-800 transition text-sm">
            🕒 Fast Delivery
          </button>
        </div>

        {/* Search */}
        <div className="w-full md:w-80 relative">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="w-full bg-[#0f0f0f] border border-gray-800 text-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:border-blue-600 transition"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            🔍
          </span>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
