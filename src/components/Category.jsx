import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Category = () => {
  const { categoriesData, navigate } = useContext(AppContext);
  const colors = [
    "from-red-200 to-red-400",
    "from-green-200 to-green-400",
    "from-blue-200 to-blue-400",
    "from-cyan-200 to-cyan-400",
    "from-purple-200 to-purple-400",
    "from-pink-200 to-pink-400",
    "from-orange-200 to-orange-400",
    "from-teal-200 to-teal-400",
  ];

  return (
    <div className="py-12">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-medium text-gray-700">Category</h2>
        <div className="w-16 border-b-2 border-secondary"></div>
      </div>

      <h2
        className="
        mt-3
        text-2xl md:text-3xl
        font-extrabold
        text-secondary"
      >
        Shop By Collection
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        className="w-full mt-8"
      >
        {categoriesData.map((category, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => navigate(`/shop?category=${category.name}`)}
              className={`
                cursor-pointer
                rounded-2xl
                bg-gradient-to-br
                ${colors[i % colors.length]}
                p-4
                flex flex-col
                items-center
                justify-center
                shadow-sm
                hover:shadow-lg
                transition
                h-[160px]
                `}
            >
              <div
                className="
                  w-16 h-16
                  md:w-20 md:h-20
                  bg-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                  shadow"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="
                    w-10 h-10
                    md:w-12 md:h-12
                    object-contain"
                />
              </div>

              <h3
                className="
                  mt-3
                  text-sm md:text-base
                  font-semibold
                  text-gray-800
                  text-center"
              >
                {category.name}
              </h3>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
