import { AppContext } from "../context/AppContext";
import { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import { assets } from "../assets/assets.js";

const Hero = () => {
  const { navigate } = useContext(AppContext);

  const slides = [
    {
      title: "Premium Online Store for Fruits & Vegetables",
      subtitle: "Fresh | Organic | Healthy",
      img: assets.hero_img1,
      btn1: "Shop Now",
      btn2: "Explore Deals",
    },
    {
      title: "Fresh and Organic Groceries Delivered",
      subtitle: "Fast Delivery at Your Doorstep",
      img: assets.hero_img2,
      btn1: "Order Now",
      btn2: "Free Delivery",
    },
    {
      title: "Your Daily Needs at Best Prices",
      subtitle: "Save More Every Day",
      img: assets.hero_img3,
      btn1: "Start Shopping",
      btn2: "Special Deals",
    },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="
            relative
            w-full
            min-h-[500px] md:min-h-[650px]
            flex flex-col md:flex-row
            items-center
            justify-between
            px-6 md:px-16
            bg-[#D8E7C7]
            overflow-hidden"
            style={{
              backgroundImage: `url(${assets.leef_layer_bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            {/* Left Content */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="
              flex flex-col
              items-center md:items-start
              text-center md:text-left
              max-w-xl z-10"
            >

              {/* Top Badge */}
              <span
                className="
                bg-white/80
                text-primary
                px-4 py-1
                rounded-full
                text-sm
                font-medium
                mb-4 mt-2"
              >
                Fresh Grocery Store 🥬
              </span>

              {/* Logo Banner */}
              <img
                src={assets.banner}
                alt="banner"
                className="w-56 md:w-72 mb-4"
              />

              {/* Title */}
              <h1
                className="
                text-3xl md:text-5xl
                font-extrabold
                text-gray-800
                leading-tight"
              >
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p
                className="
                mt-3
                text-gray-700
                text-sm md:text-lg"
              >
                {slide.subtitle}
              </p>

              {/* Buttons */}
              <div
                className="
                flex flex-wrap
                gap-4
                mt-8"
              >

                {/* Primary Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/products")}
                  className="
                  px-6 md:px-10
                  py-3
                  bg-primary
                  text-white
                  font-semibold
                  rounded-xl
                  shadow-md
                  hover:bg-secondary
                  transition"
                >
                  {slide.btn1}
                </motion.button>

                {/* Secondary Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                  px-6 md:px-10
                  py-3
                  bg-secondary
                  text-white
                  font-semibold
                  rounded-xl
                  shadow-md
                  hover:bg-primary
                  transition"
                >
                  {slide.btn2}
                </motion.button>

              </div>

            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                type: "spring",
              }}
              className="
              mt-10 md:mt-0
              flex justify-center"
            >

              <img
                src={slide.img}
                alt="hero"
                className="
                h-[250px]
                md:h-[450px]
                lg:h-[550px]
                object-contain
                drop-shadow-xl"
              />

            </motion.div>

            {/* Decorative Circle */}
            <div
              className="
              absolute
              w-[300px]
              h-[300px]
              bg-white/20
              rounded-full
              top-[-80px]
              right-[-80px]"
            />

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;