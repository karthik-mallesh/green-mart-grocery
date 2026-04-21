import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ArrowRight } from "lucide-react";

const Blogs = () => {
  const { blogsData } = useContext(AppContext);

  return (
    <div className="py-12">
      <div className="mb-10">
        <h2 className="text-lg font-medium text-gray-500">Latest Articles</h2>
        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary">
          Our Latest Blogs
        </h1>
      </div>

      <div
        className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3 
        gap-8"
      >
        {blogsData.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="
            bg-white
            rounded-3xl
            overflow-hidden
            shadow-sm
            hover:shadow-xl
            transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <span
                className="
                absolute
                top-4 left-4
                bg-secondary
                text-white
                text-xs
                px-3 py-1
                rounded-full
                z-10"
              >
                {item.date}
              </span>

              <motion.img
                src={item.image}
                alt={item.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="
                w-full 
                h-[220px]
                object-cover"
              />
            </div>

            <div className="p-6 flex flex-col gap-3">
              <h1
                className="
                text-lg md:text-xl 
                font-bold 
                text-gray-800 
                line-clamp-2"
              >
                {item.title}
              </h1>

              <p
                className="
                text-sm 
                text-gray-600 
                line-clamp-3"
              >
                {item.desc}
              </p>

              <button
                className="
                mt-3
                flex items-center gap-2
                text-secondary
                font-semibold
                hover:text-primary
                transition-all duration-300"
              >
                Read More
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
