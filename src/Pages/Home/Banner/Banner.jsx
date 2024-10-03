import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import h1 from "../../../assets/banner/h1.png";

import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 gap-5 my-20">

        <div className="col-span-1 border-r-2">
            <ul>
                <li> Woman’s Fashion</li>
                <li>Men’s Fashion</li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
            </ul>
        </div>

        <div className="col-span-3 grid md:grid-cols-2 bg-black">

            <div className="text-white grid items-center">

                <button></button>

                <h1 className="text-6xl ml-10 font-semibold">Up to 10% <br /> <span className="mt-2">of vouncher </span></h1>

                    <button className="text-white mt-10 md:mt-0">Shop Now </button>
            </div>

          <div className=" grid items-center ">
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
    </>
  );
};

export default Banner;
