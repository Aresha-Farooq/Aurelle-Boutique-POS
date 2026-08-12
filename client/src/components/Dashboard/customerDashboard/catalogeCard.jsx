const CatalogCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg duration-300">

      <img
        src={item.image}
        alt={item.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">

        <h2 className="font-semibold text-lg">
          {item.name}
        </h2>

        <p className="text-gray-500 text-sm">
          {item.category}
        </p>

        <div className="flex justify-between items-center mt-4">

          <span className="text-2xl font-bold">
            Rs.{item.price}
          </span>

          {item.saved ? (
            <button className="text-green font-semibold">
              <i className="fa-solid fa-check mr-1"></i>
              Saved
            </button>
          ) : (
            <button className="text-gray-600 hover:text-green font-semibold">
              <i className="fa-regular fa-heart mr-1"></i>
              Wishlist
            </button>
          )}

        </div>

      </div>

    </div>
  );
};

export default CatalogCard;