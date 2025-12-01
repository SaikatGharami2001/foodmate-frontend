import Tandoor from "../assets/Tandoor.jpg";

import { useParams } from "react-router-dom";
import Shimmer from "./ShimmerUI";
import { restaurantMenu } from "../utils/restaurantMenu";
import { useState } from "react";

import { useStore } from "../store/useStore";

const RestaurantMenu = () => {
  const setStore = useStore((state) => state.setCount);
  const { resId } = useParams();

  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (itemId) => {
    if (!addedItems.includes(itemId)) {
      setAddedItems([...addedItems, itemId]);
    }
  };

  const restaurantEntries = Object.entries(restaurantMenu);

  return (
    <div className="text-white max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mt-6 mb-4">Menu</h2>

      <ul className="space-y-5">
        {restaurantEntries.map(([categoryId, items]) =>
          items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between bg-[#121826] border border-[#1f2735] p-5 rounded-2xl shadow-lg hover:border-[#4ADE80] transition"
            >
              <div className="w-[70%]">
                <h3 className="text-xl font-semibold">{item.name}</h3>

                <p className="text-lg font-bold mt-3 text-[#F7B500]">
                  ₹{item.price}
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <img
                  src={Tandoor}
                  alt={item.name}
                  className="w-24 h-24 rounded-xl object-cover shadow-md cursor-pointer"
                />

                <button
                  onClick={() => {
                    setStore();
                    handleAdd(item.id);
                  }}
                  className={`px-4 py-2 rounded-xl cursor-pointer font-semibold transition-all text-sm
                    ${
                      addedItems.includes(item.id)
                        ? "bg-[#4ADE80] text-black scale-105"
                        : "bg-[#1E293B] text-white hover:bg-[#334155]"
                    }`}
                >
                  {addedItems.includes(item.id) ? "Added ✓" : "Add"}
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
