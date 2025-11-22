import { useParams } from "react-router-dom";
import Shimmer from "./ShimmerUI";
import { restaurants } from "../utils/mockData";
import { restaurantMenu } from "../utils/restaurantMenu"; // IMPORT MENU DATA

const RestaurantMenu = () => {
  const { resId } = useParams();

  // FIND RESTAURANT DETAILS FROM LIST
  const restaurant = restaurants.find((res) => res.id === resId);

  // MENU FOR THIS RESTAURANT
  const menuItems = restaurantMenu[resId];

  if (!restaurant) return <Shimmer />;

  return (
    <div className="text-white max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
      <p className="text-gray-400 mb-4">
        {restaurant.cuisines.join(", ")} • {restaurant.costForTwo}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Menu</h2>

      <ul className="space-y-4">
        {menuItems?.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-[#121826] p-4 rounded-xl"
          >
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
              <p className="font-bold mt-1">₹{item.price}</p>
            </div>

            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-lg object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
