import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Heart, CircleX, ShoppingBasket } from "lucide-react";

const WishList = () => {
  const { favorite, currency, removeFromFavorite, addToCart, navigate } =
    useContext(AppContext);

  if (favorite.length === 0) {
    return (
      <div className="py-20 flex flex-col items-center justify-center text-center">
        <Heart size={60} className="text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-700">
          Your Wishlist is Empty
        </h2>

        <p className="text-gray-500 mt-2">
          Save items you love to your wishlist.
        </p>

        <button
          onClick={() => navigate("/shop")}
          className="
          mt-6
          px-6
          py-3
          bg-secondary
          text-white
          rounded-xl
          hover:bg-primary
          transition"
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 md:px-10 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-secondary">
        My Wishlist
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorite.map((item) => (
          <div
            key={item._id}
            className="
            bg-white
            rounded-2xl
            shadow-sm
            border
            p-4
            flex
            flex-col
            justify-between
            hover:shadow-md
            transition"
          >
            <img
              src={item.images[0]}
              alt={item.name}
              className="
              w-full
              h-40
              object-cover
              rounded-xl"
            />

            <div className="mt-4">
              <h2 className="font-semibold text-lg line-clamp-2">
                {item.name}
              </h2>

              <p className="text-secondary font-bold mt-1">
                {currency}
                {item.offerPrice}
              </p>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => addToCart(item)}
                className="
                flex-1
                flex
                items-center
                justify-center
                gap-2
                bg-secondary
                text-white
                py-2
                rounded-xl
                hover:bg-primary
                transition"
              >
                <ShoppingBasket size={18} />
                Add
              </button>

              <button
                onClick={() => removeFromFavorite(item._id)}
                className="
                flex
                items-center
                justify-center
                px-3
                border
                border-red-400
                text-red-500
                rounded-xl
                hover:bg-red-500
                hover:text-white
                transition"
              >
                <CircleX size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
