import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import { Heart, ShoppingBasket, Star, Plus, Minus } from "lucide-react";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  const { productsData, currency, addToCart, addToFavorite } =
    useContext(AppContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = productsData.find((item) => item._id === parseInt(id));
    setProduct(foundProduct);
    setMainImage(foundProduct?.images[0]);
  }, [id, productsData]);

  useEffect(() => {
    if (product) {
      const related = productsData.filter(
        (item) =>
          item.category === product.category && item._id !== product._id,
      );
      setRelatedProducts(related.slice(0, 5));
    }
  }, [product, productsData]);

  if (!product) return null;

  const discount =
    Math.round(((product.price - product.offerPrice) / product.price) * 100) ||
    0;

  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div className="relative group bg-gray-50 rounded-2xl p-6 flex justify-center">
            {discount > 0 && (
              <span className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                {discount}% OFF
              </span>
            )}
            <img
              src={mainImage}
              className="w-72 md:w-96 transition-transform duration-300 group-hover:scale-110"
              alt={product.name}
            />
          </div>

          <div className="grid grid-cols-4 gap-3">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setMainImage(img)}
                className={`
                  rounded-xl
                  cursor-pointer
                  border
                  p-1
                  h-20
                  object-cover
                  transition
                  hover:border-secondary
                  ${mainImage === img ? "border-secondary" : "border-gray-200"}
                `}
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={18}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="text-gray-500 text-sm ml-2">(120 Reviews)</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xl text-gray-400 line-through">
              {currency}
              {product.price}
            </span>

            <span className="text-2xl font-bold text-secondary">
              {currency}
              {product.offerPrice}
            </span>
          </div>

          <p className="text-gray-600">{product.smallDesc}</p>

          <div className="flex items-center gap-4">
            <span className="font-medium">Quantity:</span>

            <div className="flex items-center border rounded-xl">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-3 py-2 hover:bg-gray-100"
              >
                <Minus size={16} />
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 hover:bg-gray-100"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <motion.button
              onClick={() => addToCart(product, quantity)}
              whileHover={{ scale: 1.05 }}
              className="
              flex
              items-center
              justify-center
              gap-2
              px-8
              py-3
              bg-secondary
              text-white
              rounded-xl
              font-medium
              hover:bg-primary
              transition"
            >
              <ShoppingBasket />
              Add to Cart
            </motion.button>

            <motion.button
              onClick={() => addToFavorite(product)}
              whileHover={{ scale: 1.05 }}
              className="
              flex
              items-center
              justify-center
              gap-2
              px-8
              py-3
              border
              border-secondary
              text-secondary
              rounded-xl
              font-medium
              hover:bg-secondary
              hover:text-white
              transition"
            >
              <Heart />
              Wishlist
            </motion.button>
          </div>

          <p className="text-secondary font-semibold">
            Category: {product.category}
          </p>
        </div>
      </div>

      <div className="mt-14">
        <div className="bg-white rounded-2xl shadow-sm border">
          <h2 className="bg-secondary text-white px-6 py-4 text-xl font-semibold rounded-t-2xl">
            Product Description
          </h2>
          <p className="p-6 text-gray-600 leading-relaxed">
            {product.longDesc}
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-secondary">
          Related Products
        </h2>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {relatedProducts.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
