import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Brands = () => {
  const brands = [
    assets.brand_1,
    assets.brand_2,
    assets.brand_3,
    assets.brand_4,
    assets.brand_5,
  ];

  return (
    <div className="py-12">
      <div className="mb-10 text-center">
        <h2 className="text-lg font-medium text-gray-500">Trusted Partners</h2>
        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary">
          Our Trusted Brands
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          We collaborate with top-quality brands to bring the best products to
          you
        </p>
      </div>

      <div
        className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-5 
        gap-6"
      >
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="
            bg-white
            rounded-2xl
            shadow-sm
            hover:shadow-lg
            p-6
            flex
            items-center
            justify-center
            transition-all duration-300"
          >
            <img
              src={brand}
              alt={`brand-${index}`}
              className="
              w-[120px] 
              h-[80px] 
              object-contain
              grayscale
              hover:grayscale-0
              transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
