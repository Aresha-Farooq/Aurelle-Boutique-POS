import React from "react";

const WishlistCard = ({ item }) => {
  return (
    <div className="bg-white w-72 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">

      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-52 object-cover"
      />

      {/* Card Body */}
      <div className="p-4">

        <h2 className="text-lg font-semibold">
          {item.name}
        </h2>

        <p className="text-gray-500 mt-1">
          Rs.{item.price}
        </p>

        <div className="flex items-center justify-between mt-5">

          <button className="bg-green text-white px-5 py-2 rounded-lg w-[82%] hover:bg-[#516460] transition">
            Move to Order
          </button>

          <button className="bg-gray-100 p-3 rounded-lg hover:bg-red-100">
            <i className="fa-solid fa-xmark"></i>
          </button>

        </div>

      </div>

    </div>
  );
};

export default WishlistCard;