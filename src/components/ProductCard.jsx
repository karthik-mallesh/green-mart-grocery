import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { currency, addToCart } = useContext(AppContext);

  // Calculate discount
  const discount =
    product.price > product.offerPrice
      ? Math.round(((product.price - product.offerPrice) / product.price) * 100)
      : 0;

  return (
    <div
      className="relative w-full 
      bg-white rounded-2xl 
      shadow-sm hover:shadow-lg 
      transition duration-300 
      overflow-hidden group"
    >
      {discount > 0 && (
        <span
          className="absolute top-2 left-2 
          bg-red-500 text-white 
          text-xs font-semibold 
          px-2 py-1 rounded-md z-10"
        >
          {discount}% OFF
        </span>
      )}

      <Heart
        className="absolute top-2 right-2 
        w-5 h-5 text-gray-400 
        hover:text-red-500 
        cursor-pointer z-10"
      />

      <Link to={`/product/${product._id}`}>
        <div className="h-[170px] flex items-center justify-center p-4">
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="h-full object-contain group-hover:scale-105 transition duration-300"
          />
        </div>
      </Link>

      <div className="p-4">
        <p className="text-xs text-secondary">
          {typeof product.category === "object"
            ? product.category?.name
            : product.category}
        </p>

        <h2
          className="text-sm font-semibold 
          text-gray-800 line-clamp-2 
          min-h-[40px]"
        >
          {product.name}
        </h2>

        {/* Rating */}
        <div className="text-yellow-400 text-sm mt-1">
          ★★★★☆
          <span className="text-gray-500 text-xs ml-1">(4.2)</span>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <p className="text-sm line-through text-gray-400">
            {currency}
            {product.price}
          </p>

          <p
            className="text-base 
            font-semibold text-green-600"
          >
            {currency}
            {product.offerPrice}
          </p>
        </div>

        <p className="text-xs text-green-600">
          Save {currency}
          {product.price - product.offerPrice}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full 
          flex items-center justify-center 
          gap-2 py-2 
          bg-secondary text-white 
          rounded-xl font-medium
          hover:bg-secondary/90 
          active:scale-95 
          transition"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
