import { FOOD_IMAGE_LINK } from "../utils/utils";

const Card = ({ resData }) => {
  const data = resData?.card?.card?.info;

  const {
    name,
    cloudinaryImageId,
    cuisines = [],
    costForTwo,
    avgRating,
    sla,
    aggregatedDiscountInfoV3,
    veg,
  } = data;

  const price = costForTwo?.split(" ")[0];
  const rawDiscount = aggregatedDiscountInfoV3?.header;
  const deliveryTime = sla?.slaString;

  // Remove "ITEMS" tag
  const discount = rawDiscount && rawDiscount !== "ITEMS" ? rawDiscount : null;

  return (
    <div className="group bg-[#111] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-800 cursor-pointer">
      {/* Image Section */}
      <div className="relative">
        <img
          src={FOOD_IMAGE_LINK + cloudinaryImageId}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-300"
        />

        {/* Discount Ribbon (Removed ITEMS) */}
        {discount && (
          <div className="absolute top-3 left-3 bg-yellow-400 text-black px-2 py-1 rounded-md text-sm font-bold shadow-md">
            {discount}
          </div>
        )}

        {/* Rating Badge */}
        <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md text-sm text-white font-semibold">
          ⭐ {avgRating || "--"}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Name + Veg/Nonveg Indicator */}
        <div className="flex justify-between items-center">
          <h2 className="text-white font-semibold text-lg leading-tight">
            {name}
          </h2>

          <div
            className={`w-3 h-3 rounded-sm border ${
              veg
                ? "bg-green-500 border-green-600"
                : "bg-red-500 border-red-600"
            }`}
          ></div>
        </div>

        {/* Cuisines */}
        <p className="text-gray-400 text-sm truncate">{cuisines.join(" • ")}</p>

        {/* Delivery + Price */}
        <div className="flex justify-between items-center pt-2">
          <span className="text-gray-300 text-sm flex items-center gap-1">
            ⏱ {deliveryTime}
          </span>

          <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
