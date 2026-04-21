import { assets } from "../assets/assets";
import Brands from "../components/Brands";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="py-14">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary">
          About Our Farm & Farmers
        </h1>

        <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
          We believe in delivering fresh, organic, and high-quality farm
          products directly to your doorstep. Our farmers work passionately to
          grow healthy produce while maintaining sustainable farming practices.
        </p>
      </div>

      <div
        className="
        mt-16
        grid
        md:grid-cols-2
        gap-10
        items-center"
      >
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={assets.about_hero}
            alt="about-farm"
            className="
            w-full
            max-w-md
            rounded-3xl
            shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Fresh From Farm To Your Home
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our mission is to connect farmers directly with customers, ensuring
            fair pricing and fresh produce. We focus on sustainable agriculture
            and natural farming methods to maintain quality and nutrition.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Every product is carefully selected and delivered with freshness
            guaranteed. We proudly support local farmers and eco-friendly
            farming techniques.
          </p>

          <Link to="/shop">
            <button
              className="
              w-fit
              mt-3
              px-6 py-3
              bg-secondary
              text-white
              rounded-full
              hover:bg-primary
              transition-all duration-300"
            >
              Explore Products
            </button>
          </Link>
        </motion.div>
      </div>

      <div
        className="
        mt-20
        bg-gradient-to-r
        from-green-900
        to-green-700
        text-white
        rounded-3xl
        p-8
        grid
        md:grid-cols-2
        gap-8
        items-center"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Deal of the Day
          </h1>

          <p className="text-gray-200">
            Don't miss today's exclusive offer on fresh organic fruits and
            vegetables. Limited time deal available only today!
          </p>

          <Link to="/shop">
            <button
              className="
              w-fit
              px-6 py-3
              bg-primary
              text-white
              font-semibold
              rounded-full
              hover:bg-secondary
              transition-all duration-300"
            >
              Shop Now
            </button>
          </Link>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex justify-center"
        >
          <img
            src={assets.about_hero}
            alt="deal"
            className="
            w-full
            max-w-sm
            rounded-2xl
            shadow-xl"
          />
        </motion.div>
      </div>

      <div className="mt-20">
        <Brands />
      </div>
    </div>
  );
};

export default About;
