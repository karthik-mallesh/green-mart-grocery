import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const NewsLetter = () => {
  return (
    <div
      className="
      relative
      bg-gradient-to-r 
      from-yellow-100 
      to-orange-100
      py-14 
      px-6 md:px-12 
      rounded-3xl 
      overflow-hidden"
    >
      {/* Decorative Circle */}
      <div
        className="
        absolute 
        w-[250px] 
        h-[250px] 
        bg-white/30 
        rounded-full 
        top-[-60px] 
        right-[-60px]"
      />

      <div
        className="
        flex 
        flex-col md:flex-row 
        items-center 
        justify-between 
        gap-10"
      >
        {/* Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={assets.organic_fruits}
            alt="newsletter"
            className="
            w-[220px] 
            md:w-[300px] 
            drop-shadow-xl"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="
          flex flex-col 
          items-center md:items-start 
          text-center md:text-left"
        >
          {/* Title */}
          <h1
            className="
            text-2xl md:text-4xl 
            font-extrabold 
            text-gray-800"
          >
            Subscribe to Our Newsletter
          </h1>

          {/* Subtitle */}
          <p
            className="
            text-sm md:text-base 
            text-gray-600 
            mt-2"
          >
            Get <span className="font-semibold text-primary">10% OFF</span> on
            your first order and stay updated with latest deals 🛒
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.form
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="
          flex items-center
          bg-white
          shadow-md
          border border-gray-200
          h-14
          max-w-md
          w-full
          rounded-full
          overflow-hidden"
        >
          {/* Input */}
          <input
            type="email"
            placeholder="Enter your email address"
            className="
            w-full
            h-full
            pl-6
            pr-3
            outline-none
            text-sm
            placeholder-gray-400"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="
            bg-primary
            hover:bg-secondary
            active:scale-95
            transition
            px-8
            h-full
            text-sm
            font-semibold
            text-white
            rounded-full"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default NewsLetter;
