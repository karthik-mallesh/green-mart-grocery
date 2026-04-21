import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="py-12">
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-600">Special Offers</h2>
        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary">
          Today's Best Deals
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="
          relative
          bg-gradient-to-r 
          from-orange-100 
          to-orange-50
          flex 
          flex-col md:flex-row 
          items-center 
          justify-between 
          gap-6
          p-6 
          rounded-3xl 
          overflow-hidden
          shadow-sm hover:shadow-lg
          transition-all duration-300"
        >
          <span
            className="
            absolute 
            top-4 right-4 
            bg-secondary 
            text-white 
            text-xs 
            px-3 py-1 
            rounded-full"
          >
            20% OFF
          </span>

          <div className="flex flex-col gap-3 z-10">
            <h1 className="text-primary text-xl font-bold uppercase">
              Healthy Organic Fruits
            </h1>

            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary">
              Get 20% Flat Off
            </h2>

            <button
              className="
              flex items-center gap-2
              w-fit
              px-6 py-3 
              bg-secondary 
              text-white 
              rounded-full
              hover:bg-primary 
              transition-all duration-300"
            >
              Shop Now
              <ArrowRight size={18} />
            </button>
          </div>

          <motion.img
            src={assets.organic_fruits}
            alt="fruits"
            whileHover={{ rotate: 5 }}
            className="
            w-[160px] md:w-[200px]
            drop-shadow-lg"
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="
          relative
          bg-gradient-to-r 
          from-cyan-100 
          to-cyan-50
          flex 
          flex-col md:flex-row 
          items-center 
          justify-between 
          gap-6
          p-6 
          rounded-3xl 
          overflow-hidden
          shadow-sm hover:shadow-lg
          transition-all duration-300"
        >
          <span
            className="
            absolute 
            top-4 right-4 
            bg-primary 
            text-white 
            text-xs 
            px-3 py-1 
            rounded-full"
          >
            10% OFF
          </span>

          <div className="flex flex-col gap-3 z-10">
            <h1 className="text-primary text-xl font-bold uppercase">
              Fresh Organic Vegetables
            </h1>

            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary">
              Get 10% Flat Offer
            </h2>

            <button
              className="
              flex items-center gap-2
              w-fit
              px-6 py-3 
              bg-secondary 
              text-white 
              rounded-full
              hover:bg-primary 
              transition-all duration-300"
            >
              Shop Now
              <ArrowRight size={18} />
            </button>
          </div>

          <motion.img
            src={assets.organic_fruits}
            alt="vegetables"
            whileHover={{ rotate: -5 }}
            className="
            w-[160px] md:w-[200px]
            drop-shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;
