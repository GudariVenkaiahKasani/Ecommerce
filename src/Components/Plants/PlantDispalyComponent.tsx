import React from "react";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
const plantData = {
  product_id: "123456",
  name: "Snake Plant",
  scientific_name: "Sansevieria trifasciata",
  category: "Indoor, Air Purifying",
  images: ["snake_plant_1.jpg", "snake_plant_2.jpg", "snake_plant_in_home.jpg"],
  description:
    "Snake plants are known for their upright, green, sword-like leaves that are easy to care for. This plant is ideal for beginners and thrives in low light.",
  care_instructions: {
    light: "Low to moderate light",
    watering: "Water when soil is dry to the touch",
    temperature: "60°F to 85°F",
    humidity: "Tolerates dry air",
    soil: "Well-draining soil",
  },
};
function PlantDispalyComponent() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="w-96 shadow-2xl p-4">
      <div className="relative">
        <img
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-xmas-tree/g/i/o/tr-christ19-firtree-um002-saikara-collection-60-96-original-imah6hsy9yep97zt.jpeg?q=70"
          alt="imae"
        />
        <span
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => {
            setIsLiked(!isLiked);
          }}
        >
          {isLiked ? <IoHeart size={20} /> : <IoHeartOutline size={20} />}
        </span>
      </div>
      <div className="font-bold text-lg mt-1 hover:text-blue-500 cursor-pointer">
        {plantData.description}
      </div>
      <div className="text-[16px] mt-1">{plantData.scientific_name}</div>
      <div className="text-[16px] mt-1">{plantData.category}</div>
      <div className="font-bold text-lg">$399</div>
      <div className="flex justify-between mt-2">
        <div>
          <button className="bg-blue-500 text-white p-2 rounded-sm w-32">
            Add To Cart
          </button>
        </div>
        <div>
          <button className="bg-green-500 text-red-500 p-2 rounded-sm w-32">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlantDispalyComponent;
