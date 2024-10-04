import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import h1 from "../../../assets/banner/h1.png";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion"; // Importing Framer Motion

const Banner = () => {
  return (
    <div className="grid md:grid-cols-4 gap-5 my-20 mt-28">
      {/* Animated Categories Section */}
      <div className="col-span-1 border-r-2">
        <ul>
          {/* Adding animations to each list item */}
          {["Woman’s Fashion", "Men’s Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor"].map((item, index) => (
            <motion.li 
              key={index} 
              initial={{ opacity: 0, y: -10 }} // Initial state
              animate={{ opacity: 1, y: 0 }}    // Animated state
              transition={{ duration: 0.5, delay: index * 0.1 }} // Adding delay for staggered animation
              className="my-2" // Add some margin to each list item
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="col-span-3 grid md:grid-cols-2 bg-black">
        <div className="text-white grid items-center">
          {/* Animated Heading */}
          <motion.h1 
            className="text-6xl ml-10 font-semibold"
            initial={{ opacity: 0, x: -50 }} // Initial state
            animate={{ opacity: 1, x: 0 }}    // Animated state
            transition={{ duration: 0.5 }}     // Transition properties
          >
            Up to 10% <br />
            <span className="mt-2">of voucher</span>
          </motion.h1>

          {/* Animated Button */}
          <motion.button
            className="text-white mt-10 md:mt-0"
            initial={{ scale: 0 }} // Initial scale
            animate={{ scale: 1 }}  // Animated scale
            transition={{ duration: 0.5 }} // Transition properties
          >
            Shop Now
          </motion.button>
        </div>

        <div className="grid items-center">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper w-80 md:w-auto"
          >
            <SwiperSlide>
              <img src={h1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={h1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={h1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={h1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={h1} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
